import "./index.css"
import SearchBar from "./components/SearchBar"
import AddModal from "./components/AddModal"
import PageList from "./components/PageList"
import SplashText from "./components/SplashText"
import EditModal from "./components/EditModal"
import Background from "./components/Background"
import DeleteModal from "./components/DeleteModal"
import Settings from "./components/Settings"
import Style from "./components/Style"

function App() {

  return <>
    <Style />
    <Background />
    <Settings />
    <AddModal />
    <EditModal />
    <DeleteModal />
    <div className="flex flex-col gap-3 p-3 justify-center items-center min-h-screen">
      <SplashText />
      <SearchBar />
      <PageList />
    </div>
  </>
}

export default App
