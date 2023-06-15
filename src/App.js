import sites from "./data/sites"
import "./index.css"
import Site from "./components/site"
import SearchBar from "./components/searchBar"

function App() {


  return <div className="flex flex-col gap-3 p-3 justify-center items-center min-h-screen">
    <span id="splash-text"></span>
    <SearchBar />
    <div className="container">
      <div className="grid gap-4 w-full max-sm:grid-cols-3 max-md:grid-cols-4 grid-cols-5">
        {sites.map((site, i) => (
          <Site key={i} site={site} />
        ))}
      </div>
    </div>
  </div>
}

export default App
