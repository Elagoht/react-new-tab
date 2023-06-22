import "./index.css"
import SearchBar from "./components/SearchBar"
import Settings from "./components/Settings"
import PageList from "./components/PageList"
import SplashText from "./components/SplashText"

function App() {


  return <>
    <Settings />
    <div className="flex flex-col gap-3 p-3 justify-center items-center min-h-screen">
      <SplashText />
      <SearchBar />
      <PageList />
    </div>
  </>
}

export default App
