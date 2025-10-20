import type { Level, World } from "../../types/level";
import "./PuzzleScroll.css";

type PuzzleScrollProps = {
    world: World;
};

export default function PuzzleScroll({ world }: PuzzleScrollProps) {
    return (
        <div className={`puzzle-scroll puzzle-scroll--${world.id}`}>
            <div className="puzzle-scroll__cord puzzle-scroll__cord--left" />
            <div className="puzzle-scroll__cord puzzle-scroll__cord--right" />
            <div className="puzzle-scroll__content-wrapper">
                <div className="puzzle-scroll__content">
                    <span className="puzzle-scroll__title">{world.name}</span>
                    <ul className="puzzle-scroll__levels">
                        {world.levels.map(({ id, name }: Level) => (
                            <li key={id} className="puzzle-scroll__level">
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
