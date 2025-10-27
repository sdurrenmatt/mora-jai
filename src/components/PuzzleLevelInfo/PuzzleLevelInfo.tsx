import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import "./PuzzleLevelInfo.css"

const AnimatedText = ({ text }: { text: string }) => (
    <>
        {text.split("").map((char, index) => (
            <span
                key={index}
                className="puzzle-level-info__letter"
            >
                {char}
            </span>
        ))}
    </>
)

export default function PuzzleLevelInfo() {
    const { currentWorld, currentLevel } = useContext(AppContext)

    return (
        <div className="puzzle-level-info">
            <div className="puzzle-level-info__world">
                <AnimatedText text={currentWorld.name} />
            </div>

            <div className="puzzle-level-info__level">
                <AnimatedText text={`Level ${currentLevel.name}`} />
            </div>

            <div className="puzzle-level-info__difficulty">
                <AnimatedText text={currentLevel.difficulty} />
            </div>
        </div>
    )
}
