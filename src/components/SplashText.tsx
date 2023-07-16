import splashTexts from "../data/splashTexts"

export default function SplashText() {

  return <span id="splash-text">
    {splashTexts[Math.round(Math.random() * (splashTexts.length - 1))]}
  </span>
}
