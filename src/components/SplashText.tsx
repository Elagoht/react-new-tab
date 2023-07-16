import { FC } from "react"
import splashTexts from "../data/splashTexts"

const SplashText: FC = () => {

  return <span id="splash-text">
    {splashTexts[Math.round(Math.random() * (splashTexts.length - 1))]}
  </span>
}

export default SplashText