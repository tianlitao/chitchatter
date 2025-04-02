import Alert, { AlertColor } from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import CloseIcon from '@mui/icons-material/Close'

import { AlertOptions } from 'models/shell'
import { useEffect, useState, SyntheticEvent } from 'react'
import { sleep } from 'lib/sleep'
import { encryption } from 'services/Encryption'
import { useTranslation } from 'react-i18next'

export interface RoomShareDialogProps {
  isOpen: boolean
  handleClose: () => void
  roomId: string
  password: string
  showAlert: (message: string, options?: AlertOptions) => void
  copyToClipboard: (
    content: string,
    alert: string,
    severity: AlertColor
  ) => Promise<void>
}

export function RoomShareDialog(props: RoomShareDialogProps) {
  const { t } = useTranslation()
  const [isAdvanced, setIsAdvanced] = useState(false)
  const [isUnderstood, setIsUnderstood] = useState(false)
  const [password, setPassword] = useState('')
  const [passThrottled, setPassThrottled] = useState(false)
  const handleClose = () => {
    props.handleClose()
    setPassword('')
  }

  useEffect(() => {
    if (!isAdvanced) setIsUnderstood(false)
  }, [isAdvanced])

  useEffect(() => {
    if (!isUnderstood) setPassword('')
  }, [isUnderstood])

  const url = window.location.href.split('#')[0]

  const copyWithPass = async () => {
    const encoded = await encryption.encodePassword(props.roomId, password)

    if (encoded === props.password) {
      const params = new URLSearchParams()
      params.set('secret', props.password)

      await props.copyToClipboard(
        `${url}#${params}`,
        t('privateRoomUrlCopied'),
        'warning'
      )

      handleClose()
    } else {
      setPassThrottled(true)
      props.showAlert(t('incorrectPassword'), {
        severity: 'error',
      })

      await sleep(2000)

      setPassThrottled(false)
    }
  }

  const copyWithoutPass = async () => {
    await props.copyToClipboard(
      url,
      isAdvanced ? t('privateRoomUrlWithoutPassCopied') : t('currentUrlCopied'),
      'success'
    )
    handleClose()
  }

  const handleFormSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!passThrottled) copyWithPass()
  }

  return (
    <Dialog
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleFormSubmit}>
        {isAdvanced && (
          <DialogTitle id="alert-dialog-title">
            {t('copyUrlWithPassword')}
            <Button onClick={() => setIsAdvanced(false)}>{t('simple')}</Button>
            <IconButton
              aria-label={t('close')}
              onClick={handleClose}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
        )}
        {isAdvanced && (
          <DialogContent>
            <DialogContentText sx={{ mb: 2 }}>
              {t('privateRoomUrlDescription')}
            </DialogContentText>
            <Alert severity="error" sx={{ mb: 2 }}>
              {t('urlSharingWarning')}
            </Alert>
            <Alert severity="warning">{t('browserHistoryWarning')}</Alert>
            <FormControlLabel
              label={t('understandRisks')}
              control={
                <Checkbox
                  checked={isUnderstood}
                  onChange={e => setIsUnderstood(e.target.checked)}
                />
              }
            />
            <TextField
              autoFocus
              margin="none"
              id="password"
              label={t('password')}
              type="password"
              fullWidth
              variant="standard"
              value={password}
              disabled={!isUnderstood}
              onChange={e => setPassword(e.target.value)}
            />
          </DialogContent>
        )}
        <DialogActions>
          {isAdvanced ? (
            <Tooltip title={t('copyUrlWithPasswordTooltip')}>
              <span>
                <Button
                  type="submit"
                  onClick={copyWithPass}
                  color="error"
                  disabled={
                    password.length === 0 || !isUnderstood || passThrottled
                  }
                >
                  {t('copyUrlWithPassword')}
                </Button>
              </span>
            </Tooltip>
          ) : (
            <Button onClick={() => setIsAdvanced(true)} color="error">
              {t('advanced')}
            </Button>
          )}
          <Tooltip title={t('copyUrlTooltip')}>
            <Button onClick={copyWithoutPass} color="success" autoFocus>
              {t('copyUrl')}
            </Button>
          </Tooltip>
        </DialogActions>
      </form>
    </Dialog>
  )
}
