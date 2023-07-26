import { FC, useCallback, useEffect, useRef } from "react";
import backgrounds from "../assets/backgrounds"
import { useSettings } from "../utils/contexts";
import classNames from "classnames";

const Background: FC = () => {

  const wallpaper = useRef<HTMLDivElement>(null)
  const { settings } = useSettings()

  const moveBackground = useCallback((event: MouseEvent) => {
    if (wallpaper.current) {
      if (settings.background.mouseInteraction) {
        wallpaper.current.style.setProperty("background-position-x", -event.clientX / 30 + "px");
        wallpaper.current.style.setProperty("background-position-y", window.innerHeight + event.clientY / 30 + "px");
      }
    }
  }, [settings.background.mouseInteraction])

  useEffect(() => {
    const wallpaperItem = wallpaper.current as HTMLElement
    if (wallpaper.current) {
      document.body.addEventListener<"mousemove">("mousemove", moveBackground)
    }
    return () => {
      if (wallpaperItem) {
        document.body.removeEventListener("mousemove", moveBackground)
        wallpaperItem.style.backgroundPosition = "0 0"
      }
    }
  }, [moveBackground])

  useEffect(() => {
    if (wallpaper.current)
      wallpaper.current.style.display = settings.background.type === 1 ? "none" : "block"
  }, [settings.background.type])

  useEffect(() => {
    document.body.style.backgroundColor = settings.background.color
  }, [settings.background.color])

  useEffect(() => {
    if (wallpaper.current)
      switch (settings.background.type) {
        case 0:
          wallpaper.current.style.backgroundImage = `url("${backgrounds[Math.round(Math.random() * (backgrounds.length - 1))]}")`
          break
        case 2:
          wallpaper.current.style.backgroundImage = `url("${settings.background.url}")`
          break
      }
  }, [settings.background.type, settings.background.url])

  return <div
    id="wallpaper"
    ref={wallpaper}
    className={classNames({
      "bg-center bg-cover fixed top-0 left-0": true,
      "w-[125%] h-[125vh]": settings.background.mouseInteraction,
      "w-full h-screen": !settings.background.mouseInteraction
    })}
  ></div>
}

export default Background