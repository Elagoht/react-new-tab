import { createContext, useContext, useState } from "react"

const Context = createContext(false)

export default function PopupContext({ children }) {
    const [popup, setPopup] = useState(false)


    const values = {
        popup,
        setPopup
    }

    return <Context.Provider value={values}>
        {children}
    </Context.Provider>
}
export const usePopup = () => useContext(Context)