import { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import MuiMarkdown from 'mui-markdown'
import Box from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'

import { ShellContext } from 'contexts/ShellContext'
import {
  messageTranscriptSizeLimit,
  messageCharacterSizeLimit,
} from 'config/messaging'

const messageTranscriptSizeLimitFormatted = Intl.NumberFormat().format(
  messageTranscriptSizeLimit
)

const messageCharacterSizeLimitFormatted = Intl.NumberFormat().format(
  messageCharacterSizeLimit
)

export const About = () => {
  const { setTitle } = useContext(ShellContext)
  const { t } = useTranslation()
  const theme = useTheme()

  useEffect(() => {
    setTitle(t('about'))
  }, [setTitle, t])

  return (
    <Box
      className="About"
      sx={{
        p: 2,
        mx: 'auto',
        maxWidth: theme.breakpoints.values.md,
        '& p': {
          mb: 2,
        },
      }}
    >
      <MuiMarkdown>
        {t('aboutContent', {
          messageTranscriptSizeLimit: messageTranscriptSizeLimitFormatted,
          messageCharacterSizeLimit: messageCharacterSizeLimitFormatted,
        })}
      </MuiMarkdown>
    </Box>
  )
}
