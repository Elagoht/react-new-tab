import { createContext, useState, useEffect, FC } from "react"
import sites from "../data/sites"
import { IChildrenComponent, IPageIndexless } from "../types"

interface IPagesContext {
  pages: IPageIndexless[]
  setPages: React.Dispatch<React.SetStateAction<IPageIndexless[]>>
}

export const Context = createContext<IPagesContext>({
  pages: [],
  setPages: () => undefined
})

const PagesContext: FC<IChildrenComponent> = ({ children }) => {

  const [pages, setPages] = useState<IPageIndexless[]>(
    localStorage["pages"] === undefined
      ? sites
      : JSON.parse(localStorage["pages"]) as IPageIndexless[]
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
