import { FC, useState } from "react"
import searchProviders from "../data/searchProviders"
import EditIcon from "./EditIcon"
import SettingsIcon from "./SettingsIcon"

const SearchBar: FC = () => {

  function handleStorage() {
    if (!localStorage["searchProvider"]) localStorage["searchProvider"] = 0
    return localStorage["searchProvider"]
  }

  const [searcher, setSearcher] = useState(handleStorage())
  const [searchTerm, setSearchTerm] = useState("")

  function search(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      if (event.currentTarget.value)
        window.location = searchProviders[searcher].link + event.currentTarget.value as string & Location
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
          const value = (document.getElementById("searchProvider") as HTMLSelectElement).value
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
        placeholder="Ara"
        onKeyDown={(event) => search(event)}
        onChange={() => {
          setSearchTerm((document.getElementById("search-term") as HTMLInputElement).value)
        }}
        className="bg-transparent w-full p-3"
      />
      <input
        type="reset"
        onClick={() => {
          (document.getElementById("search-term") as HTMLInputElement).value = ""
          setSearchTerm("")
        }}
        value="❌"
        className={
          "cursor-pointer transition-all overflow-hidden" +
          (searchTerm === "" ? " w-0 outline-none" : " w-16  p-3")
        }
      />
    </div>
    <EditIcon />
    <SettingsIcon />
  </div>
}

export default SearchBar