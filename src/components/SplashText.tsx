import { FC, useEffect, useState } from "react"
import splashTexts from "../data/splashTexts"
import { useSettings } from "../assets/utils/contexts"

const SplashText: FC = () => {

  const [splashText, setSplashText] = useState<string>("")

  const { settings } = useSettings()

  useEffect(() => {
    if (settings.text.custom)
      setSplashText(settings.text.customText)
    else
      setSplashText(splashTexts[Math.round(Math.random() * (splashTexts.length - 1))])
  }, [settings.text.customText, settings.text.custom])

  return <span id="splash-text">
    {splashText}
  </span>
}

export default SplashText