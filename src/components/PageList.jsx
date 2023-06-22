import { usePages } from "../contexts/PagesContext"
import Page from "./Page"
import ico_new from "../assets/misc/plus.svg"
import { useEditMode } from "../contexts/EditContext"
import { usePopup } from "../contexts/PopupContext"

export default function PageList() {

  const { pages } = usePages()
  const { editMode } = useEditMode()
  const { setPopup } = usePopup()

  return <div className="container">
    <div className={(pages.length !== 0 || editMode) ? "grid gap-4 w-full max-sm:grid-cols-3 max-md:grid-cols-4 max-lg:grid-cols-5 grid-cols-6" : "w-full flex items-center justify-center text-center h-48"}>
      {pages.map((page, i) => (
        <Page pages={pages} key={i} info={page} />
      ))}
      {
        (!editMode && pages.length === 0) && <div div className="text-3xl text-neutral-200">There's no pages yet. Let's add some!</div>
      }
      {editMode &&
        <div className="cursor-pointer card bg-indigo-100 bg-opacity-40 scaring" onClick={() => setPopup(prev => !prev)}>
          <img src={ico_new} alt="+" />
          <div>Add New Site</div>
        </div>
      }
    </div>
  </div >
}
