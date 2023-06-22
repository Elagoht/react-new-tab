import { createContext, useContext, useState, useEffect } from "react"
import sites from "../data/sites"

const Context = createContext()

export default function PagesContext({ children }) {

  const [pages, setPages] = useState(
    localStorage["pages"] === undefined
      ? sites
      : JSON.parse(localStorage["pages"])
  )

  useEffect(() => {
    if (localStorage["pages"] === undefined) {
      localStorage["pages"] = JSON.stringify(sites)
    }
  }, [pages])

  const values = {
    pages,
    setPages
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export const usePages = () => useContext(Context)