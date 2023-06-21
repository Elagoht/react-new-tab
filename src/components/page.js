const Page = (props) => {
  const info = props["page"]
  return <a href={info.link} className="card">
    <img width={"100%"} src={"https://icon.horse/icon/" + new URL(info.link).hostname + new URL(info.link).pathname + "?size=big"} alt={info.name} />
    <div className="whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
      {info.name}
    </div>
  </a>
}
export default Page