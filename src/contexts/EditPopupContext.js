import { createContext, useContext, useState } from "react"

const Context = createContext()

export default function EditPopupContext({ children }) {
    const [editPopup, setEditPopup] = useState(false)
    const [editingPage, setEditingPage] = useState(false)

    const values = {
        editPopup,
        setEditPopup,
        editingPage,
        setEditingPage
    }

    return <Context.Provider value={values}>
        {children}
    </Context.Provider>
}
export const useEditPopup = () => useContext(Context)