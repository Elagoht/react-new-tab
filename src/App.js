import { useEffect, useState } from "react";
import backgrounds from "./assets/backgrounds";
import sites from "./data/sites";
import searchProviders from "./data/searchProviders";
import "./index.css";
import splashTexts from "./data/splashTexts";

function App() {
  function handleStorage() {
    if (!localStorage["searchProvider"]) localStorage["searchProvider"] = 0;
    return localStorage["searchProvider"];
  }

  const [searcher, setSearcher] = useState(handleStorage());

  useEffect(() => {
    document.body.style.backgroundImage = `url("${
      backgrounds[Math.round(Math.random() * (backgrounds.length - 1))]
    }")`;
    document.getElementById("splash-text").innerText =
      splashTexts[Math.round(Math.random() * (splashTexts.length - 1))];
  }, []);

  function search(event) {
    if (event.key === "Enter") {
      window.open(searchProviders[searcher].link + event.target.value);
    }
  }

  return (
    <div className="flex flex-col gap-3 p-3 justify-center items-center min-h-screen">
      <span id="splash-text"></span>
      <div className="container">
        <input
          placeholder="Search"
          onKeyDown={search}
          className="bg-transparent w-full p-3 -m-3 mr-0"
        />
        <img src={searchProviders[searcher].icon} className="w-6 mr-2" />
        <select
          value={localStorage["searchProvider"]}
          id="searchProvider"
          onChange={() => {
            let value = document.getElementById("searchProvider").value;
            setSearcher(value);
            localStorage["searchProvider"] = value;
          }}
        >
          {searchProviders.map((searchProvider, i) => (
            <option key={i} value={i}>
              {searchProvider.name}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        <div className="grid gap-4 w-full max-sm:grid-cols-3 max-md:grid-cols-4 max-lg:grid-cols-5 grid-cols-6">
          {sites.map((site, i) => (
            <a key={i} href={site.link} className="card">
              <img width={"100%"} src={site.icon} alt={site.name} />
              <div className="whitespace-nowrap text-ellipsis overflow-hidden max-w-full">
                {site.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
