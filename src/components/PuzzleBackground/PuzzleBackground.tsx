import type { ReactNode } from "react";
import "./PuzzleBackground.css";

type PuzzleBackgroundProps = {
    children?: ReactNode
}

export default function PuzzleBackground({ children }: PuzzleBackgroundProps) {
    return (
        <div className="puzzle-background">
            <div className="puzzle-background__petals">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="puzzle-background__petal" />
                ))}
            </div>
            {children}
        </div>
    );
}
