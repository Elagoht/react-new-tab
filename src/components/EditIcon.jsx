import icon from '../assets/misc/edit.svg'
import { useEditMode } from "../contexts/EditContext"

const EditIcon = () => {

  const { setEditMode } = useEditMode()

  return <div
    className="glass p-2 aspect-square items-center justify-center cursor-pointer select-none"
    onClick={() => setEditMode(prev => !prev)}
  >
    <img src={icon} alt="settings" width="24" />
  </div>
}

export default EditIcon