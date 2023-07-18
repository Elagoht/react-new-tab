import Page from "./Page"
import { FC } from "react"
import { useEditMode, usePages, useAddPopup } from "../assets/utils/contexts"
import { Plus } from "lucide-react"

const PageList: FC = () => {

  const { pages } = usePages()
  const { editMode } = useEditMode()
  const { setAddPopup: setAddPopup } = useAddPopup()

  return <div className="container">
    <div className={(pages.length !== 0 || editMode) ? "grid gap-4 w-full max-[480px]:grid-cols-2 max-sm:grid-cols-3 max-md:grid-cols-4 max-lg:grid-cols-5 grid-cols-6" : "w-full flex items-center justify-center text-center h-48"}>
      {pages.map((page, index) => (
        <Page key={index} info={page} />
      ))}
      {
        (!editMode && pages.length === 0) && <div className="text-3xl text-neutral-200">There's no pages yet. Let's add some!</div>
      }
      {editMode &&
        <div className="cursor-pointer card bg-indigo-100 bg-opacity-40 scaring" onClick={() => setAddPopup(prev => !prev)}>
          <Plus size={"100%"} />
          <div>Add New Site</div>
        </div>
      }
    </div>
  </div >
}

export default PageList