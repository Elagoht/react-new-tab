import ico_delete from "../assets/misc/delete.svg"
import ico_previous from "../assets/misc/previous.svg"
import ico_next from "../assets/misc/next.svg"
import ico_rename from "../assets/misc/rename.svg"
import { useEditMode } from "../contexts/EditContext"
import { usePages } from "../contexts/PagesContext"
import { useCallback } from "react"
import { useEditPopup } from "../contexts/EditPopupContext"

const Page = ({ info }) => {

  const { editMode } = useEditMode()
  const { pages, setPages } = usePages()
  const { setEditPopup, setEditingPage } = useEditPopup()

  const deletePage = useCallback((event) => {
    // Get index of page
    const clickedPage = event.currentTarget.parentElement.parentElement;
    const allPages = clickedPage.parentNode.childNodes;
    const index = Array.prototype.indexOf.call(allPages, clickedPage);

    // If not confirmed, do not continue
    if (!window.confirm(`Do you want to delete ${clickedPage.childNodes[2].innerHTML}?`)) return
    // Remove index from clone
    const new_pages = [...pages]
    new_pages.splice(index, 1)

    // Set new array as pages
    localStorage["pages"] = JSON.stringify(new_pages)
    setPages(new_pages)
  }, [pages, setPages])

  const editPage = useCallback(event => {
    // Get index of page
    const clickedPage = event.currentTarget.parentElement.parentElement;
    const allPages = clickedPage.parentNode.childNodes;
    const index = Array.prototype.indexOf.call(allPages, clickedPage);

    setEditPopup(true)
    setEditingPage({
      name: clickedPage.childNodes[2].innerHTML,
      link: clickedPage.href,
      index
    })
  }, [setEditPopup, setEditingPage])

  const moveForward = (event) => {
    // Get index of page
    const clickedPage = event.currentTarget.parentElement.parentElement;
    const allPages = clickedPage.parentNode.childNodes;
    const index = Array.prototype.indexOf.call(allPages, clickedPage);
    if (index === pages.length - 1) return

    // Remove and insert one index before
    let new_pages = [...pages]

    const selected = new_pages[index]
    new_pages[index] = new_pages[index + 1]
    new_pages[index + 1] = selected

    // Set new array as pages
    localStorage["pages"] = JSON.stringify(new_pages)
    setPages(new_pages)
  }
  const moveBackward = (event) => {
    // Get index of page
    const clickedPage = event.currentTarget.parentElement.parentElement;
    const allPages = clickedPage.parentNode.childNodes;
    const index = Array.prototype.indexOf.call(allPages, clickedPage);
    if (index === 0) return

    // Remove and insert one index before
    let new_pages = [...pages]
    const selected = new_pages[index];
    new_pages[index] = new_pages[index - 1];
    new_pages[index - 1] = selected;

    // Set new array as pages
    localStorage["pages"] = JSON.stringify(new_pages)
    setPages(new_pages)
  }

  return <a
    href={info.link}
    onClick={editMode ? (e => e.preventDefault()) : undefined}
    className={"card" + (editMode ? " bg-neutral-400  hover:bg-neutral-50 hover:bg-opacity-40 bg-opacity-40 scaring" : "")}
  >
    <img
      width="100%"
      src={"https://icon.horse/icon/" + new URL(info.link).hostname + new URL(info.link).pathname + "?size=big"}
      alt={info.name}
      className={editMode ? "-mb-10 p-2 bg-neutral-800 bg-opacity-60 rounded-lg" : ""}
    />
    {
      editMode && <div className="controller flex justify-around w-full">
        <button onClick={event => moveBackward(event)} className="edit-button rounded-bl-lg hover:bg-neutral-400"><img width="16rem" src={ico_previous} alt="<" /></button>
        <button onClick={event => deletePage(event)} className="edit-button hover:bg-red-400"><img width="16rem" src={ico_delete} alt="X" /></button>
        <button onClick={event => editPage(event)} className="edit-button hover:bg-amber-400"><img width="16rem" src={ico_rename} alt="|" /></button>
        <button onClick={event => moveForward(event)} className="edit-button rounded-br-lg hover:bg-neutral-400"><img width="16rem" src={ico_next} alt=">" /></button>
      </div >
    }
    <div className="whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
      {info.name}
    </div>
  </a >
}
export default Page