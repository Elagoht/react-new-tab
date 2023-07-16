import { FC, useEffect, useRef } from "react";
import backgrounds from "../assets/backgrounds"

const Background: FC = () => {

  const wallpaper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (wallpaper.current) {
      wallpaper.current.style.backgroundImage = `url("${backgrounds[Math.round(Math.random() * (backgrounds.length - 1))]}")`
      document.body.addEventListener<"mousemove">("mousemove", (event) => {
        if (wallpaper.current) {
          wallpaper.current.style.setProperty("background-position-x", -event.clientX / 30 + "px");
          wallpaper.current.style.setProperty("background-position-y", window.innerHeight + event.clientY / 30 + "px");
        }

      })
    }
  }, [])

  return <div
    id="wallpaper"
    ref={wallpaper}
    className="w-[125%] h-[125vh] bg-center bg-cover fixed top-0 left-0"
  ></div>
}

export default Background