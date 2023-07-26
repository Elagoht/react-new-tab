import { FC } from "react"
import { useEditPopup, usePages } from "../utils/contexts"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const EditModal: FC = () => {

  const { pages, setPages } = usePages()
  const { editPopup, setEditPopup, editingPage } = useEditPopup()

  const handleEditSite = (event: React.FormEvent<HTMLFormElement>) => {
    const new_pages = [...pages]
    new_pages[editingPage.index] = {
      name: (event.currentTarget.elements.namedItem("site-name") as HTMLInputElement).value,
      link: (event.currentTarget.elements.namedItem("site-link") as HTMLInputElement).value,
    }
    setPages(new_pages)
    setEditPopup(false)
    localStorage["pages"] = JSON.stringify(new_pages)
    event.preventDefault()
  }

  return <AnimatePresence mode="wait">
    {
      editPopup &&

      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: {
            opacity: 0,
            transition: { ease: "easeIn", duration: .1 }
          },
          visible: {
            opacity: 1,
            transition: { ease: "easeIn", duration: .1 }
          }
        }}
        className="glass rounded-none border-none bg-neutral-900 bg-opacity-80 fixed top-0 right-0 bottom-0 left-0 z-20 p-4 flex justify-center items-center flex-col cursor-default">
        <div className="flex-col border border-neutral-100 border-opacity-20 rounded-xl bg-black p-3 bg-opacity-40 text-white max-w-screen-sm w-full">

          <div className="text-xl font-bold flex justify-between">
            <div className="text-orange-300">Siteyi Düzenle</div>
            <div
              onClick={() => setEditPopup(prev => !prev)}
              className="text-red-700 hover:text-red-500 cursor-pointer select-none"
            ><X size={32} /></div>
          </div>

          <form className="w-full" onSubmit={handleEditSite}>
            <label htmlFor="site-name">İsim</label>
            <input
              required
              id="site-name"
              name="site-name"
              type="text"
              defaultValue={editingPage.name}
              className="w-full glass p-1"
            />

            <label htmlFor="site-link">URL</label>
            <input
              required
              id="site-link"
              name="site-link"
              type="url"
              defaultValue={editingPage.link}
              className="w-full glass p-1"
            />

            <input
              id="add-button"
              type="submit"
              value="Kaydet"
              className="glass py-2 ml-auto mt-2 bg-green-700 hover:bg-green-500"
            />

          </form>
        </div>
      </motion.div>
    }
  </AnimatePresence >
}

export default EditModal