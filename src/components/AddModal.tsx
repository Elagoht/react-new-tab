import { FC } from "react"
import { usePages, usePopup } from "../assets/utils/contexts"

const AddModal: FC = () => {

  const { pages, setPages } = usePages()
  const { popup, setPopup } = usePopup()

  const handleAddSite = (event: React.FormEvent<HTMLFormElement>) => {
    const new_pages = [
      ...pages,
      {
        name: (event.currentTarget.elements.namedItem("site-name") as HTMLInputElement).value,
        link: (event.currentTarget.elements.namedItem("site-link") as HTMLInputElement).value,
      }
    ]
    setPages(new_pages)
    setPopup(false)
    localStorage["pages"] = JSON.stringify(new_pages)
    event.preventDefault()
  }

  return popup && <>
    <div className="bg-neutral-900 bg-opacity-80 fixed top-0 right-0 bottom-0 left-0 z-20 p-4 flex justify-center items-center flex-col cursor-default">
      <div className="glass flex-col text-white max-w-screen-sm w-full">

        <div className="text-xl font-bold flex justify-between">
          <div> Add New Site</div>
          <div
            onClick={() => setPopup(prev => !prev)}
            className="glass rounded-full w-8 h-8 bg-red-700 hover:bg-red-500 justify-center items-center cursor-pointer select-none"
          >X</div>
        </div>

        <form className="w-full" onSubmit={(event) => handleAddSite(event)}>
          <label htmlFor="site-name">Name</label>
          <input
            required
            id="site-name"
            name="site-name"
            type="text"
            className="w-full glass p-1"
          />

          <label htmlFor="site-link">URL</label>
          <input
            required
            id="site-link"
            name="site-link"
            type="url"
            className="w-full glass p-1"
          />

          <input
            id="add-button"
            type="submit"
            value="Add New"
            className="glass py-2 ml-auto mt-2 bg-green-700 hover:bg-green-500"
          />

        </form>
      </div>
    </div>
  </>
}

export default AddModal