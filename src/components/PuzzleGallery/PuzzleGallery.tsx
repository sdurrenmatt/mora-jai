import { useContext, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { GameContext } from "../../context/GameContext"
import { worlds } from "../../data/worlds"
import AnimatedText from "../common/AnimatedText/AnimatedText"
import PuzzleReward from "../PuzzleReward/PuzzleReward"
import "./PuzzleGallery.css"

export default function PuzzleGallery() {
    const { solvedPuzzles } = useContext(GameContext)
    const [currentWorldIndex, setCurrentWorldIndex] = useState(0)
    const world = worlds[currentWorldIndex]

    const selectPreviousWorld = () => setCurrentWorldIndex((currentWorldIndex - 1 + worlds.length) % worlds.length)
    const selectNextWorld = () => setCurrentWorldIndex((currentWorldIndex + 1) % worlds.length)

    return (
        <div className="puzzle-gallery">
            <div className="puzzle-gallery__world">
                <button onClick={selectPreviousWorld} className="puzzle-gallery__button">&lt;</button>
                <span className="puzzle-gallery__world-name"><AnimatedText text={world.name} /></span>
                <button onClick={selectNextWorld} className="puzzle-gallery__button">&gt;</button>
            </div>

            <div className="puzzle-gallery__rewards">
                {world.levels.map((level, index) => {
                    const nodeRef = useRef<HTMLDivElement>(null)
                    const locked = !solvedPuzzles.has(level.id)

                    return (
                        <CSSTransition
                            key={level.id}
                            nodeRef={nodeRef}
                            appear
                            in
                            timeout={400}
                            classNames="puzzle-gallery__reward--pop-in"
                            style={{ '--i': index }}
                        >
                            <div ref={nodeRef} className="puzzle-gallery__reward">
                                <PuzzleReward reward={level.reward} locked={locked} />
                                <div className="puzzle-gallery__description">
                                    {locked ? "???" : level.reward.description}
                                </div>
                            </div>
                        </CSSTransition>
                    )
                })}
            </div>
        </div>
    )
}
