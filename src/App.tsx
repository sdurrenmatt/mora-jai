import "./App.css"
import PuzzleMap from "./components/PuzzleMap/PuzzleMap"
import PuzzleMenu from "./components/PuzzleMenu/PuzzleMenu"
import PuzzleTitle from "./components/PuzzleTitle/PuzzleTitle"
import { worlds } from "./data/worlds"

function App() {
  return (
    <div className="app-layout">
      <div className="app-sidebar">
        <PuzzleTitle />
        <PuzzleMenu />
      </div>
      <div className="app-main">
        <PuzzleMap worlds={worlds} />
      </div>
    </div>
  )
}

export default App
