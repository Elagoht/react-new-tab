import { createContext, useState, useEffect, FC } from "react"
import sites from "../data/sites"
import { IChildrenComponent, IPage } from "../types"

interface IPagesContext {
  pages: IPage[]
  setPages: React.Dispatch<React.SetStateAction<IPage[]>>
}

export const Context = createContext<IPagesContext>({
  pages: [],
  setPages: () => undefined
})

const PagesContext: FC<IChildrenComponent> = ({ children }) => {

  const [pages, setPages] = useState<IPage[]>(
    localStorage["pages"] === undefined
      ? sites
      : JSON.parse(localStorage["pages"]) as IPage[]
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
