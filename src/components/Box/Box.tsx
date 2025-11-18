import clsx from "clsx"
import { useContext, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import { GameContext } from "../../context/GameContext"
import { usePuzzleState } from "../../hooks/usePuzzleState"
import Reward from "../Reward/Reward"
import "./Box.css"
import Corners from "./Corners"
import Grid from "./Grid"

export default function Box() {
  const { currentLevel } = useContext(GameContext)
  const { puzzle, rewardCollected, onCornerClick, onTileClick, setRewardCollected } = usePuzzleState()
  const nodeRef = useRef<HTMLDivElement>(null)

  return (
    <div className="box-container">
      <CSSTransition
        key={currentLevel.id}
        nodeRef={nodeRef}
        in
        appear
        timeout={3000}
        classNames="box--lift"
      >
        <div
          ref={nodeRef}
          className={clsx(
            "box",
            "wood-texture",
            "wood-texture--dark",
            { "box--solved": puzzle.solved }
          )}
          role="region"
          aria-label={`Puzzle box${puzzle.solved ? ", solved" : ""}`}
        >
          <Corners data={puzzle.corners} onCornerClick={onCornerClick} />
          <div className="box__base wood-texture wood-texture--light">
            <button
              type="button"
              className={clsx(
                "box__reward",
                { "box__reward--collected": rewardCollected }
              )}
              onClick={() => setRewardCollected(true)}
              aria-label={
                rewardCollected
                  ? "Reward collected"
                  : "Collect your reward"
              }
              aria-hidden={!puzzle.solved}
            >
              <Reward data={currentLevel.reward} />
            </button>
            <div className="box__grid wood-texture wood-texture--dim">
              <Grid tiles={puzzle.tiles} onTileClick={onTileClick} />
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}
