import { useTranslation } from 'react-i18next'
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <FormControl size="small">
      <InputLabel>{i18n.t('language')}</InputLabel>
      <Select
        value={i18n.language}
        onChange={e => changeLanguage(e.target.value)}
        label={i18n.t('language')}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="zh">中文</MenuItem>
      </Select>
    </FormControl>
  )
}
