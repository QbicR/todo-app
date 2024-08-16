import { useTranslation } from "react-i18next"

import { IconButton } from "../icon-button"
import { EnIcon, RuIcon } from "../icons"

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation()

  const isRuLang = i18n.language === "ru"

  const changeLang = async () => {
    i18n.changeLanguage(isRuLang ? "en" : "ru")
  }

  const icon = isRuLang ? <RuIcon /> : <EnIcon />

  return (
    <IconButton
      icon={icon}
      tooltipText={t("tooltip.lang")}
      size="lg"
      variant="flat"
      onPress={changeLang}
    />
  )
}
