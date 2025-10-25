import type { ReactNode } from "react";
import "./PuzzleBackground.css";

export default function PuzzleBackground({ children }: { children?: ReactNode }) {
    return (
        <div className="puzzle-background">
            <div className="puzzle-background__petals">
                {
                    Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="puzzle-background__petal" />
                    ))
                }
            </div>
            {children}
        </div>
    );
}
