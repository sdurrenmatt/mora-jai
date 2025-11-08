import { useCallback, useContext, useEffect, useState } from "react"
import { GameContext } from "../context/GameContext"
import { pressCorner, pressTile } from "../lib/puzzle"
import type { CornerPosition, Puzzle } from "../lib/puzzle/types"
import { usePuzzleAudio } from "./usePuzzleAudio"

export function usePuzzleState() {
    const { currentLevel, addSolvedPuzzle } = useContext(GameContext)
    const { playTileClick, playCornerClick, playSolved } = usePuzzleAudio()

    const [puzzle, setPuzzle] = useState<Puzzle>(currentLevel.puzzle)
    useEffect(() => setPuzzle(currentLevel.puzzle), [currentLevel])

    const [rewardCollected, setRewardCollected] = useState(false)
    useEffect(() => setRewardCollected(false), [currentLevel])

    const onCornerClick = useCallback(
        (position: CornerPosition) => {
            playCornerClick()
            const result = pressCorner(puzzle, position)

            switch (result.type) {
                case "updated":
                    setPuzzle(result.puzzle)
                    break
                case "solved":
                    setPuzzle(result.puzzle)
                    addSolvedPuzzle(currentLevel.id)
                    playSolved()
                    break
                case "reset":
                    setPuzzle(currentLevel.puzzle)
                    break
            }
        },
        [puzzle, currentLevel.id, playCornerClick, playSolved]
    )

    const onTileClick = useCallback(
        (i: number, j: number) => {
            playTileClick()
            const result = pressTile(puzzle, i, j)
            if (result.type === "updated") {
                setPuzzle(result.puzzle)
            }
        },
        [puzzle, playTileClick]
    )

    return { puzzle, rewardCollected, onCornerClick, onTileClick, setRewardCollected }
}
