import "./index.css"
import SearchBar from "./components/SearchBar"
import AddModal from "./components/AddModal"
import PageList from "./components/PageList"
import SplashText from "./components/SplashText"
import EditModal from "./components/EditModal"

function App() {


  return <>
    <AddModal />
    <EditModal />
    <div className="flex flex-col gap-3 p-3 justify-center items-center min-h-screen">
      <SplashText />
      <SearchBar />
      <PageList />
    </div>
  </>
}

export default App
