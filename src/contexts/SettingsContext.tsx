import { FC, createContext, useState } from "react"
import { IChildrenComponent, ISettings } from "../types"

interface IDeletePopupContext {
  settings: ISettings
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>
}

export const Context = createContext<IDeletePopupContext>({
  settings: {
    background: {
      mouseInteraction: true,
      type: 0,
      color: "#000000"
    },
    text: {
      custom: false,
      customText: ""
    }
  },
  setSettings: () => undefined,
})

const DeletePopupContext: FC<IChildrenComponent> = ({ children }) => {

  const [settings, setSettings] = useState<ISettings>({
    background: {
      mouseInteraction: false,
      type: 0,
      color: "#000000"
    },
    text: {
      custom: false,
      customText: ""
    }
  })

  const values = {
    settings,
    setSettings
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export default DeletePopupContext
