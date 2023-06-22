import { useEffect, useRef } from "react";
import backgrounds from "../assets/backgrounds"

export default function Background() {

  const wallpaper = useRef("div")

  useEffect(() => {
    wallpaper.current.style.backgroundImage = `url("${backgrounds[Math.round(Math.random() * (backgrounds.length - 1))]}")`

    document.body.addEventListener("mousemove", (e) => {
      wallpaper.current.style.setProperty("background-position-x", -e.clientX / 10 + "px");
      wallpaper.current.style.setProperty("background-position-y", window.innerHeight + e.clientY / 10 + "px");
    })
  }, [])

  return <div
    id="wallpaper"
    ref={wallpaper}
    className="w-[125%] h-[125vh] bg-center bg-cover fixed top-0 left-0"
  ></div>
}
