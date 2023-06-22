import { useEffect, useState } from "react"
import backgrounds from "../assets/backgrounds"
import searchProviders from "../data/searchProviders"
import splashTexts from "../data/splashTexts"
import EditIcon from "./EditIcon"

const SearchBar = ({ setSettings }) => {
  function handleStorage() {
    if (!localStorage["searchProvider"]) localStorage["searchProvider"] = 0
    return localStorage["searchProvider"]
  }

  const [searcher, setSearcher] = useState(handleStorage())
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    document.body.style.backgroundImage = `url("${backgrounds[Math.round(Math.random() * (backgrounds.length - 1))]
      }")`
    document.getElementById("splash-text").innerText =
      splashTexts[Math.round(Math.random() * (splashTexts.length - 1))]
  }, [])

  function search(event) {
    if (event.key === "Enter") {
      window.location = searchProviders[searcher].link + event.target.value
    }
  }
  return <div className="flex max-w-screen-lg w-full gap-2">
    <div className="container p-0 items-center">
      <img
        src={searchProviders[searcher].icon}
        alt={searchProviders[searcher].name}
        className="w-6 h-6 m-3"
      />
      <select
        value={localStorage["searchProvider"]}
        id="searchProvider"
        className="py-3"
        onChange={() => {
          let value = document.getElementById("searchProvider").value
          setSearcher(value)
          localStorage["searchProvider"] = value
        }}>
        {searchProviders.map((searchProvider, i) => (
          <option key={i} value={i}>
            {searchProvider.name}
          </option>
        ))}
      </select>
      <input
        id="search-term"
        placeholder="Search"
        onKeyDown={search}
        onChange={() => {
          setSearchTerm(document.getElementById("search-term").value)
        }}
        className="bg-transparent w-full p-3"
      />
      <input
        type="reset"
        onClick={() => {
          document.getElementById("search-term").value = ""
          setSearchTerm("")
        }}
        value="❌"
        className={
          "cursor-pointer transition-all overflow-hidden" +
          (searchTerm === "" ? " w-0 outline-none" : " w-16  p-3")
        }
      />
    </div>
    <EditIcon setSettings={setSettings} />
  </div>
}

export default SearchBar