import { useContext } from 'react'
import useTheme from '@mui/material/styles/useTheme'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import ReportIcon from '@mui/icons-material/Report'

import { ShellContext } from 'contexts/ShellContext'
import { useTranslation } from 'react-i18next'

export const ServerConnectionFailureDialog = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const {
    isServerConnectionFailureDialogOpen,
    setIsServerConnectionFailureDialogOpen,
  } = useContext(ShellContext)

  const handleDialogClose = () => {
    setIsServerConnectionFailureDialogOpen(false)
  }

  return (
    <Dialog
      open={isServerConnectionFailureDialogOpen}
      onClose={handleDialogClose}
    >
      <DialogTitle>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ReportIcon
            fontSize="medium"
            sx={() => ({
              color: theme.palette.error.main,
              mr: theme.spacing(1),
            })}
          />
          {t('serverConnectionFailed')}
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{t('pairingServerNotFound')}</DialogContentText>
        <Typography
          component="ul"
          sx={{
            color: theme.palette.text.secondary,
            m: 1,
          }}
        >
          <li>{t('refreshPage')}</li>
          <li>{t('disableAdBlocker')}</li>
          <li>{t('tryDifferentNetwork')}</li>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>{t('close')}</Button>
      </DialogActions>
    </Dialog>
  )
}
