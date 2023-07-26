import { FC, useCallback } from "react"
import { useDelete, usePages } from "../utils/contexts"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const DeleteModal: FC = () => {

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

  return <AnimatePresence mode="wait">
    {
      deletePopup && <motion.div
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
            <div className="text-red-400">Siteyi Sil</div>
            <div
              onClick={() => setDeletePopup(prev => !prev)}
              className="text-red-700 hover:text-red-500 cursor-pointer select-none"
            ><X size={32} /></div>
          </div>

          <div>
            Gerçekten
            <a target="_blank" rel="noreferrer" href={deleting.link} className="text-indigo-500"> {deleting.link} </a>
            adresine giden
            <span className="text-amber-500"> {deleting.name} </span>
            sitesini silmek istiyor musunuz?
          </div>

          <div className="w-full flex justify-end gap-3">
            <input
              onClick={() => setDeletePopup(false)}
              id="add-button"
              type="submit"
              value="İptal"
              className="glass py-2 mt-2 bg-neutral-700 hover:bg-neutral-500"
            />
            <input
              onClick={handleDelete}
              id="add-button"
              type="submit"
              value="Sil"
              className="glass py-2 mt-2 bg-red-700 hover:bg-red-500"
            />
          </div>
        </div>
      </motion.div>
    }
  </AnimatePresence>
}

export default DeleteModal