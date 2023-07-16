import { FC, createContext, useState } from "react"
import { IChildrenComponent } from "../types"

interface IPopupContext {
  popup: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<IPopupContext>({
  popup: false,
  setPopup: () => undefined
})

const PopupContext: FC<IChildrenComponent> = ({ children }) => {
  const [popup, setPopup] = useState(false)

  const values = {
    popup,
    setPopup
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export default PopupContext