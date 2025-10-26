import "./PuzzleLevelInfo.css"

type PuzzleLevelInfoProps = {
    world: string
    level: string
    difficulty: string
}

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

export default function PuzzleLevelInfo({ world, level, difficulty }: PuzzleLevelInfoProps) {
    return (
        <div className="puzzle-level-info">
            <div className="puzzle-level-info__world">
                <AnimatedText text={world} />
            </div>

            <div className="puzzle-level-info__level">
                <AnimatedText text={`Level ${level}`} />
            </div>

            <div className="puzzle-level-info__difficulty">
                <AnimatedText text={difficulty} />
            </div>
        </div>
    )
}
