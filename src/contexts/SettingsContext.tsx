import { FC, createContext, useState } from "react"
import { IChildrenComponent, ISettings } from "../types"

interface IDeletePopupContext {
  settings: ISettings
  updateSettings: (payload: ISettings) => void
}

export const Context = createContext<IDeletePopupContext>({
  settings: {
    background: {
      mouseInteraction: true,
      type: 0,
      color: "#000000",
      url: ""
    },
    text: {
      custom: false,
      customText: ""
    },
    blur: 2
  },
  updateSettings: () => undefined,
})

const SettingsContext: FC<IChildrenComponent> = ({ children }) => {

  const [settings, setSettings] = useState<ISettings>(
    // Set the data on local storage, if available else write default values
    localStorage.getItem("settings")
      ? JSON.parse(localStorage.getItem("settings") as string)
      : {
        background: {
          mouseInteraction: false,
          type: 0,
          color: "#000000",
          url: ""
        },
        text: {
          custom: false,
          customText: ""
        },
        blur: 2
      }
  )

  const updateSettings = (payload: ISettings) => {
    console.log("worked!")
    localStorage.setItem("settings", JSON.stringify(payload))
    setSettings(payload)
  }

  const values = {
    settings,
    updateSettings
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export default SettingsContext