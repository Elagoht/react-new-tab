import { useCallback } from "react"
import { useDelete } from "../contexts/DeletePopupContext"
import { usePages } from "../contexts/PagesContext"

export default function DeleteModal() {

  const { pages, setPages } = usePages()
  const { deleting, setDeletePopup, deletePopup } = useDelete()

  const handleDelete = useCallback(() => {
    // Remove index from clone
    const new_pages = [...pages]
    new_pages.splice(deleting.index, 1)
    // Set new array as pages
    localStorage["pages"] = JSON.stringify(new_pages)
    setPages(new_pages)
    setDeletePopup(false)
  }, [deleting.index, pages, setPages, setDeletePopup])

  return deletePopup && <div className="bg-neutral-900 bg-opacity-80 fixed top-0 right-0 bottom-0 left-0 z-20 p-4 flex justify-center items-center flex-col cursor-default">
    <div className="glass flex-col text-white max-w-screen-sm w-full">

      <div className="text-xl font-bold flex justify-between">
        <div> Edit Site</div>
        <div
          onClick={() => setDeletePopup(prev => !prev)}
          className="glass rounded-full w-8 h-8 bg-red-700 hover:bg-red-500 justify-center items-center cursor-pointer select-none"
        >X</div>
      </div>

      <div>
        Do you really want to delete the
        <span className="text-amber-500"> {deleting.name} </span>
        which goes to
        <a target="_blank" rel="noreferrer" href={deleting.link} className="text-indigo-500"> {deleting.link}</a>
        ?
      </div>

      <div className="w-full flex justify-end gap-3">
        <input
          onClick={() => setDeletePopup(false)}
          id="add-button"
          type="submit"
          value="Cancel"
          className="glass py-2 mt-2 bg-neutral-700 hover:bg-neutral-500"
        />
        <input
          onClick={(event) => handleDelete(event)}
          id="add-button"
          type="submit"
          value="Done"
          className="glass py-2 mt-2 bg-red-700 hover:bg-red-500"
        />
      </div>
    </div>
  </div>
}
