import { createContext, useContext, useState } from "react"

const Context = createContext()

export default function DeletePopupContext({ children }) {

  const [deletePopup, setDeletePopup] = useState(false)
  const [deleting, setDeleting] = useState({})

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

export const useDelete = () => useContext(Context)
