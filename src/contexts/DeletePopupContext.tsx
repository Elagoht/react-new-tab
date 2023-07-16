import { FC, createContext, useState } from "react"
import { IChildrenComponent } from "../types"

interface IDeletePopupContext {
  deletePopup: boolean
  setDeletePopup: React.Dispatch<React.SetStateAction<boolean>>
  deleting: {
    index: number
    name: string
    link: string
  }
  setDeleting: React.Dispatch<React.SetStateAction<{
    index: number
    name: string
    link: string
  }>>
}

export const Context = createContext<IDeletePopupContext>({
  deletePopup: false,
  setDeletePopup: () => undefined,
  deleting: {
    index: -1,
    name: "",
    link: ""
  },
  setDeleting: () => undefined,
})

const DeletePopupContext: FC<IChildrenComponent> = ({ children }) => {

  const [deletePopup, setDeletePopup] = useState(false)
  const [deleting, setDeleting] = useState({
    index: -1,
    name: "",
    link: ""
  })

  const values = {
    deletePopup,
    setDeletePopup,
    deleting,
    setDeleting
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export default DeletePopupContext
