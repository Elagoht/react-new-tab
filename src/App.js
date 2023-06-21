import "./index.css"
import Page from "./components/page"
import SearchBar from "./components/searchBar"
import Settings from "./components/settings"
import SettingsIcon from "./components/settingsIcon"
import sites from "./data/sites"
import { useEffect, useState } from "react"

function App() {

  const [pages, setPages] = useState(
    localStorage["pages"] === undefined
      ? sites
      : JSON.parse(localStorage["pages"])
  )

  useEffect(() => {
    if (localStorage["pages"] === undefined) {
      localStorage["pages"] = JSON.stringify(sites)
    }
  }, [])

  const [settings, setSettings] = useState(false)

  return <>
    <SettingsIcon setSettings={setSettings} />
    <Settings pages={pages} setPages={setPages} settings={settings} />
    <div className="flex flex-col gap-3 p-3 justify-center items-center min-h-screen">
      <span id="splash-text"></span>
      <SearchBar />
      <div className="container">
        <div className="grid gap-4 w-full max-sm:grid-cols-3 max-md:grid-cols-4 max-lg:grid-cols-5 grid-cols-6">
          {pages.map((page, i) => (
            <Page key={i} page={page} />
          ))}
        </div>
      </div>
    </div>
  </>
}

export default App
