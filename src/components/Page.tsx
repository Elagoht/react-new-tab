import ico_loading from "../assets/misc/loading.svg"
import { FC, useCallback, useState } from "react"
import { useDelete, useEditMode, useEditPopup, usePages } from "../assets/utils/contexts"
import { ChevronLeft, ChevronRight, Edit3, Trash2 } from "lucide-react"

interface PageProps {
  info: {
    name: string
    link: string
  }
}

const Page: FC<PageProps> = ({ info }) => {

  const { editMode } = useEditMode()
  const { pages, setPages } = usePages()
  const { setEditPopup, setEditingPage } = useEditPopup()
  const { setDeleting, setDeletePopup } = useDelete()
  const [loaded, setLoaded] = useState(false)

  const deletePage = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Get index of page
    if (event.currentTarget.parentElement) {
      const clickedPage = event.currentTarget.parentElement.parentElement as HTMLAnchorElement;
      const allPages = (clickedPage.parentNode as HTMLElement).childNodes;
      const index = Array.prototype.indexOf.call(allPages, clickedPage);

      setDeletePopup(true)
      setDeleting({
        name: (clickedPage.childNodes[2] as HTMLElement).innerHTML,
        link: clickedPage.href,
        index
      })
    }
  }, [setDeletePopup, setDeleting])

  const editPage = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Get index of page
    if (event.currentTarget.parentElement) {

      const clickedPage = event.currentTarget.parentElement.parentElement as HTMLAnchorElement;
      const allPages = ((clickedPage as HTMLElement).parentNode as ParentNode).childNodes;
      const index = Array.prototype.indexOf.call(allPages, clickedPage);

      setEditPopup(true)
      setEditingPage({
        name: (clickedPage.childNodes[2] as HTMLElement).innerHTML,
        link: clickedPage.href,
        index
      })
    }
  }, [setEditPopup, setEditingPage])

  const moveForward = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Get index of page
    if (event.currentTarget.parentElement) {
      const clickedPage = event.currentTarget.parentElement.parentElement as HTMLAnchorElement;
      const allPages = (clickedPage.parentNode as HTMLElement).childNodes;
      const index = Array.prototype.indexOf.call(allPages, clickedPage);
      if (index === pages.length - 1) return

      // Remove and insert one index before
      const new_pages = [...pages]

      const selected = new_pages[index]
      new_pages[index] = new_pages[index + 1]
      new_pages[index + 1] = selected

      // Set new array as pages
      localStorage["pages"] = JSON.stringify(new_pages)
      setPages(new_pages)
    }
  }
  const moveBackward = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Get index of page
    if (event.currentTarget.parentElement) {
      const clickedPage = event.currentTarget.parentElement.parentElement as HTMLAnchorElement;
      const allPages = (clickedPage.parentNode as HTMLElement).childNodes;
      const index = Array.prototype.indexOf.call(allPages, clickedPage);
      if (index === 0) return

      // Remove and insert one index before
      const new_pages = [...pages]
      const selected = new_pages[index];
      new_pages[index] = new_pages[index - 1];
      new_pages[index - 1] = selected;

      // Set new array as pages
      localStorage["pages"] = JSON.stringify(new_pages)
      setPages(new_pages)
    }
  }

  return <a
    href={info.link}
    onClick={editMode ? (e => e.preventDefault()) : undefined}
    onAuxClick={editMode ? (e => e.preventDefault()) : undefined}
    className={"card" + (editMode ? " bg-neutral-400  hover:bg-neutral-50 hover:bg-opacity-40 bg-opacity-40 scaring" : "")}
    style={{ animationDelay: -500 * Math.random() + "ms" }}
  >
    <img
      onLoad={() => setLoaded(true)}
      width="100%"
      src={"https://icon.horse/icon/" + new URL(info.link).hostname + new URL(info.link).pathname + "?size=big"}
      alt={info.name}
      className={
        (editMode ? "-mb-10 p-2 bg-neutral-800 bg-opacity-60 rounded-lg" : "") +
        (loaded ? "" : " hidden")
      }
    />
    {!loaded &&
      <img
        width="100%"
        src={ico_loading}
        alt="Loading..."
        className={"loading" + (editMode ? " -mb-10 p-2" : "")}
      />
    }
    {
      editMode && <div className="controller flex justify-around w-full">
        <button onClick={event => moveBackward(event)} className="edit-button rounded-bl-lg hover:bg-neutral-400">
          <ChevronLeft size={16} />
        </button>
        <button onClick={event => deletePage(event)} className="edit-button hover:bg-red-400">
          <Trash2 size={16} />
        </button>
        <button onClick={event => editPage(event)} className="edit-button hover:bg-amber-400">
          <Edit3 size={16} />
        </button>
        <button onClick={event => moveForward(event)} className="edit-button rounded-br-lg hover:bg-neutral-400">
          <ChevronRight size={16} />
        </button>
      </div >
    }
    <div className="whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
      {info.name}
    </div>
  </a >
}

export default Page