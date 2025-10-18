import "./App.css"
import PuzzleBox from "./components/PuzzleBox/PuzzleBox"
import PuzzleMenu from "./components/PuzzleMenu/PuzzleMenu"
import PuzzleTitle from "./components/PuzzleTitle/PuzzleTitle"
import { level1 } from "./data/levels/level1"

function App() {
  return (
    <div className="app-layout">
      <div className="app-sidebar">
        <PuzzleTitle />
        <PuzzleMenu />
      </div>
      <div className="app-main">
        <PuzzleBox level={level1} />
      </div>
    </div>
  )
}

export default App
