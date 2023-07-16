import { FC, createContext, useState } from "react"
import { IChildrenComponent } from "../types"

interface IEditContext {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<IEditContext>({
  editMode: false,
  setEditMode: () => undefined
})

const EditContext: FC<IChildrenComponent> = ({ children }) => {

  const [editMode, setEditMode] = useState<boolean>(false)

  const values = {
    editMode,
    setEditMode
  }

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
}

export default EditContext