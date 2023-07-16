import { createContext, useState, useEffect, FC } from "react"
import sites from "../data/sites"
import { IChildrenComponent } from "../types"

interface IPagesContext {
  pages: {
    index: number
    name: string
    link: string
  }[]
  setPages: React.Dispatch<React.SetStateAction<{
    index: number
    name: string
    link: string
  }[]>>
}

export const Context = createContext<IPagesContext>({
  pages: [],
  setPages: () => undefined
})

const PagesContext: FC<IChildrenComponent> = ({ children }) => {

  const [pages, setPages] = useState<{
    index: number
    name: string
    link: string
  }[]>(
    localStorage["pages"] === undefined
      ? sites
      : JSON.parse(localStorage["pages"]) as {
        index: number
        name: string
        link: string
      }[]
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
