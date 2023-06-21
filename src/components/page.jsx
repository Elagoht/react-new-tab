import ico_delete from "../assets/misc/delete.svg"
import ico_previous from "../assets/misc/previous.svg"
import ico_next from "../assets/misc/next.svg"

const Page = ({ editMode, setPages, pages, info }) => {
  return <a
    href={editMode ? "javascript:;" : info.link}
    className={"card" + (editMode ? " bg-indigo-100 bg-opacity-40" : "")}
  >
    <img width="100%" src={"https://icon.horse/icon/" + new URL(info.link).hostname + new URL(info.link).pathname + "?size=big"} alt={info.name} />
    {
      editMode && <div className="controller flex justify-around w-full">
        <button className="w-8 h-8 glass p-0 justify-center items-center rounded-full"><img width="16rem" src={ico_previous} alt="<" /></button>
        <button className="w-8 h-8 glass p-0 justify-center items-center rounded-full"><img width="16rem" src={ico_delete} alt="X" /></button>
        <button className="w-8 h-8 glass p-0 justify-center items-center rounded-full"><img width="16rem" src={ico_next} alt=">" /></button>
      </div>
    }
    <div className="whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
      {info.name}
    </div>
  </a >
}
export default Page