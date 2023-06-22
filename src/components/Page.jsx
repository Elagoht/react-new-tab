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
    if (!window.confirm(`Do you want to delete ${clickedPage.childNodes[1].innerHTML}?`)) return
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
      name: clickedPage.childNodes[1].innerHTML,
      link: clickedPage.href,
      index
    })

    console.log({
      name: clickedPage.childNodes[1].innerHTML,
      link: clickedPage.href,
      index
    })
  }, [setEditPopup, setEditingPage])

  return <a
    href={info.link}
    onClick={editMode ? (e => e.preventDefault()) : undefined}
    className={"card" + (editMode ? " bg-indigo-100 bg-opacity-40 scaring" : "")}
  >
    <img width="100%" src={"https://icon.horse/icon/" + new URL(info.link).hostname + new URL(info.link).pathname + "?size=big"} alt={info.name} />
    <div className="whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
      {info.name}
    </div>
    {
      editMode && <div className=" controller flex gap-1 justify-around w-full">
        <button className="w-7 h-7 glass p-0 justify-center items-center"><img width="16rem" src={ico_previous} alt="<" /></button>
        <button onClick={event => deletePage(event)} className="w-7 h-7 glass p-0 justify-center items-center"><img width="16rem" src={ico_delete} alt="X" /></button>
        <button onClick={event => editPage(event)} className="w-7 h-7 glass p-0 justify-center items-center"><img width="16rem" src={ico_rename} alt="|" /></button>
        <button className="edit-button"><img width="16rem" src={ico_next} alt=">" /></button>
      </div>
    }
  </a>
}
export default Page