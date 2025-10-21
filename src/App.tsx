import "./App.css"
import PuzzleBox from "./components/PuzzleBox/PuzzleBox"
import PuzzleMap from "./components/PuzzleMap/PuzzleMap"
import PuzzleMenu from "./components/PuzzleMenu/PuzzleMenu"
import PuzzleTitle from "./components/PuzzleTitle/PuzzleTitle"
import { worlds } from "./data/worlds"

export default function App() {
  return (
    <div className="app">
      <div className="app__sidebar">
        <PuzzleTitle />
        <PuzzleMenu />
      </div>
      <div className="app__main">
        <div className="app__puzzle-box"><PuzzleBox level={worlds[0].levels[0]} /></div>
        <div className="app__puzzle-map"><PuzzleMap worlds={worlds} /></div>
      </div>
    </div>
  )
}
