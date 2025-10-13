import "./App.css"
import PuzzleBox from "./components/PuzzleBox/PuzzleBox"
import PuzzleMenu from "./components/PuzzleMenu/PuzzleMenu"
import { level1 } from "./data/levels/level1"

function App() {
  return (
    <div className="app-layout">
      <PuzzleMenu />
      <div className="app-main">
        <PuzzleBox level={level1} />
      </div>
    </div>
  )
}

export default App
