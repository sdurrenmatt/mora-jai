
import Box from "../Box/Box"
import LevelInfo from "../LevelInfo/LevelInfo"
import LevelMap from "../LevelMap/LevelMap"
import "./Game.css"

export default function Game() {
  return (
    <div className="game">
      <div className="game__level-map">
        <LevelMap />
      </div>

      <div className="game__box">
        <Box />
      </div>

      <div className="game__level-info">
        <LevelInfo />
      </div>
    </div>
  )
}
