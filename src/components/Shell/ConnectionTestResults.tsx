import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import CircularProgress from '@mui/material/CircularProgress'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Circle from '@mui/icons-material/FiberManualRecord'
import { Box } from '@mui/system'
import ReportIcon from '@mui/icons-material/Report'

import { TrackerConnection } from 'lib/ConnectionTest'
import { ShellContext } from 'contexts/ShellContext'

import { ConnectionTestResults as IConnectionTestResults } from './useConnectionTest'

interface ConnectionTestResultsProps {
  connectionTestResults: IConnectionTestResults
}
export const ConnectionTestResults = ({
  connectionTestResults: { hasHost, hasRelay, trackerConnection },
}: ConnectionTestResultsProps) => {
  const { t } = useTranslation()
  const { setIsServerConnectionFailureDialogOpen } = useContext(ShellContext)

  const handleServerConnectionFailedMessageClick = () => {
    setIsServerConnectionFailureDialogOpen(true)
  }

  if (trackerConnection === TrackerConnection.FAILED) {
    return (
      <Typography
        variant="subtitle2"
        sx={{ cursor: 'pointer' }}
        onClick={handleServerConnectionFailedMessageClick}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <ReportIcon color="error" sx={{ mr: 1 }} />
          <span>{t('serverConnectionFailed')}</span>
        </Box>
      </Typography>
    )
  }

  if (trackerConnection !== TrackerConnection.CONNECTED) {
    return (
      <Typography variant="subtitle2">
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <CircularProgress size={16} sx={{ mr: 1.5 }} />
          <span>{t('searchingForServers')}</span>
        </Box>
      </Typography>
    )
  }

  if (hasHost && hasRelay) {
    return (
      <Tooltip title={t('fullNetworkConnectionTooltip')}>
        <Typography variant="subtitle2">
          <Typography
            component="span"
            sx={theme => ({ color: theme.palette.success.main })}
          >
            <Circle sx={{ fontSize: 'small' }} />
          </Typography>{' '}
          {t('fullNetworkConnection')}
        </Typography>
      </Tooltip>
    )
  } else if (hasHost) {
    return (
      <Tooltip title={t('partialNetworkConnectionTooltip')}>
        <Typography variant="subtitle2">
          <Typography
            component="span"
            sx={theme => ({ color: theme.palette.warning.main })}
          >
            <Circle sx={{ fontSize: 'small' }} />
          </Typography>{' '}
          {t('partialNetworkConnection')}
        </Typography>
      </Tooltip>
    )
  } else {
    return (
      <Tooltip title={t('noNetworkConnectionTooltip')}>
        <Typography variant="subtitle2">
          <Typography
            component="span"
            sx={theme => ({ color: theme.palette.error.main })}
          >
            <Circle sx={{ fontSize: 'small' }} />
          </Typography>{' '}
          {t('noNetworkConnection')}
        </Typography>
      </Tooltip>
    )
  }
}
