import { createContext, useContext, useState } from "react"

const Context = createContext(false)

export default function EditContext({ children }) {

  const [editMode, setEditMode] = useState(false)

  const values = {
    editMode,
    setEditMode
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export const useEditMode = () => useContext(Context)