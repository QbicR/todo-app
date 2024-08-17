import { useTheme } from "next-themes"
import { useTranslation } from "react-i18next"

import { IconButton } from "../icon-button"
import { DarkThemeIcon, LightThemeIcon } from "../icons"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()

  const isLight = theme === "light"

  const changeTheme = () => {
    setTheme(isLight ? "dark" : "light")
  }

  const icon = isLight ? <DarkThemeIcon /> : <LightThemeIcon />

  return (
    <div>
      <IconButton
        icon={icon}
        tooltipText={t("tooltip.theme")}
        size="lg"
        onPress={changeTheme}
        className="text-foreground-600"
      />
    </div>
  )
}
