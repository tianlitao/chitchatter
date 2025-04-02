import { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import MuiMarkdown from 'mui-markdown'
import useTheme from '@mui/material/styles/useTheme'

import { ShellContext } from 'contexts/ShellContext'

export const Disclaimer = () => {
  const { setTitle } = useContext(ShellContext)
  const { t } = useTranslation()
  const theme = useTheme()

  useEffect(() => {
    setTitle(t('disclaimer'))
  }, [setTitle, t])

  return (
    <Box
      className="Disclaimer"
      sx={{
        p: 2,
        mx: 'auto',
        maxWidth: theme.breakpoints.values.md,
        '& p': {
          mb: 2,
        },
      }}
    >
      <MuiMarkdown>{t('disclaimerContent')}</MuiMarkdown>
    </Box>
  )
}
