import { createContext, useContext, useState, useEffect, FC } from "react"
import sites from "../data/sites"
import { IChildrenComponent, Page } from "../types"

interface IPagesContext {
  pages: Page[]
  setPages: React.Dispatch<React.SetStateAction<Page[]>>
}

export const Context = createContext<IPagesContext>({
  pages: [],
  setPages: () => undefined
})

const PagesContext: FC<IChildrenComponent> = ({ children }) => {

  const [pages, setPages] = useState<Page[]>(
    localStorage["pages"] === undefined
      ? sites
      : JSON.parse(localStorage["pages"]) as Page[]
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

export default PagesContext
