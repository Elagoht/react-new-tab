import { FC, createContext, useState } from "react"
import { IChildrenComponent } from "../types"

interface IEditPopupContext {
  editPopup: boolean
  setEditPopup: React.Dispatch<React.SetStateAction<boolean>>
  editingPage: {
    index: number
    name: string
    link: string
  }
  setEditingPage: React.Dispatch<React.SetStateAction<{
    index: number;
    name: string;
    link: string;
  }>>
}

export const Context = createContext<IEditPopupContext>({
  editPopup: false,
  setEditPopup: () => undefined,
  editingPage: {
    index: -1,
    name: "",
    link: ""
  },
  setEditingPage: () => undefined
})

const EditPopupContext: FC<IChildrenComponent> = ({ children }) => {

  const [editPopup, setEditPopup] = useState<boolean>(false)
  const [editingPage, setEditingPage] = useState<{
    index: number
    name: string
    link: string
  }>({
    index: -1,
    name: "",
    link: ""
  })

  return <Context.Provider value={{
    editPopup,
    setEditPopup,
    editingPage,
    setEditingPage
  }}>
    {children}
  </Context.Provider>
}

export default EditPopupContext