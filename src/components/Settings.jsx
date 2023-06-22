import { usePages } from "../contexts/PagesContext"
import { usePopup } from "../contexts/PopupContext"

const Settings = () => {

  const { pages, setPages } = usePages()
  const { popup, setPopup } = usePopup()

  const handleAddSite = (e) => {
    const new_pages = [
      ...pages,
      {
        name: e.target.elements["site-name"].value,
        link: e.target.elements["site-link"].value,
      }
    ]
    setPages(new_pages)
    setPopup(false)
    localStorage["pages"] = JSON.stringify(new_pages)
    e.preventDefault()
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

        <form className="w-full" onSubmit={handleAddSite}>
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

export default Settings