import { FC } from 'react'
import { useEditMode } from '../assets/utils/contexts'
import { Edit3 } from 'lucide-react'

const EditIcon: FC = () => {

  const { editMode, setEditMode } = useEditMode()

  return <div
    className={"glass p-2 aspect-square items-center justify-center cursor-pointer select-none" + (editMode ? " bg-neutral-200 bg-opacity-40 border-neutral-200" : "")}
    onClick={() => setEditMode(prev => !prev)}
  >
    <Edit3 stroke="white" />
  </div>
}

export default EditIcon