import { FC, createContext, useState } from "react"
import { IChildrenComponent } from "../types"

interface IPopupContext {
  popup: boolean;
  setAddPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<IPopupContext>({
  popup: false,
  setAddPopup: () => undefined
})

const AddPopupContext: FC<IChildrenComponent> = ({ children }) => {
  const [popup, setAddPopup] = useState(false)

  const values = {
    popup,
    setAddPopup
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export default AddPopupContext