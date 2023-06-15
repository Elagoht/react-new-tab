const Site = (props) => {
  const info = props["site"]
  return <a href={info.link} className="card">
    <img width={"100%"} src={"https://icon.horse/icon/" + new URL(info.link).hostname + "?size=big"} />
    <div className="whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
      {info.name}
    </div>
  </a>
}
export default Site