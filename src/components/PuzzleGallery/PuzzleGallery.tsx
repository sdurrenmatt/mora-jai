import { useContext, useRef, useState, type CSSProperties } from "react"
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
                <button
                    type="button"
                    onClick={selectPreviousWorld}
                    className="puzzle-gallery__button"
                    aria-label="Previous world"
                >
                    &lt;
                </button>
                <span className="puzzle-gallery__world-name" aria-live="polite">
                    <AnimatedText text={world.name} />
                </span>
                <button
                    type="button"
                    onClick={selectNextWorld}
                    className="puzzle-gallery__button"
                    aria-label="Next world"
                >
                    &gt;
                </button>
            </div>

            <ul className="puzzle-gallery__rewards">
                {world.levels.map((level, index) => {
                    const nodeRef = useRef<HTMLLIElement>(null)
                    const locked = !solvedPuzzles.has(level.id)

                    return (
                        <CSSTransition
                            key={level.id}
                            nodeRef={nodeRef}
                            appear
                            in
                            timeout={550}
                            classNames="puzzle-gallery__reward--pop-in"
                            style={{ '--i': index } as CSSProperties}
                        >
                            <li ref={nodeRef} className="puzzle-gallery__reward">
                                <PuzzleReward reward={level.reward} locked={locked} />
                                <div
                                    className="puzzle-gallery__reward-description"
                                    aria-hidden="true"
                                >
                                    {locked ? "???" : level.reward.description}
                                </div>
                            </li>
                        </CSSTransition>
                    )
                })}
            </ul>
        </div>
    )
}