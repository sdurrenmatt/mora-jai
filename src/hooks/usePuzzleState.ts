import { useCallback, useContext, useEffect, useState } from "react"
import clickSound from "../assets/sounds/click.mp3"
import lightSwitchSound from "../assets/sounds/light-switch.mp3"
import openingLittleBoxSound from "../assets/sounds/opening-little-box.mp3"
import { AppContext } from "../context/AppContext"
import { pressCorner, pressTile } from "../lib/puzzle"
import type { CornerPosition, Puzzle } from "../lib/puzzle/types"

function usePuzzleAudio() {
    const clickAudio = new Audio(clickSound)
    const lightSwitchAudio = new Audio(lightSwitchSound)
    const openingLittleBoxAudio = new Audio(openingLittleBoxSound)

    const playTileClick = useCallback(() => clickAudio.play(), [clickAudio])
    const playCornerClick = useCallback(() => lightSwitchAudio.play(), [lightSwitchAudio])
    const playSolved = useCallback(() => openingLittleBoxAudio.play(), [openingLittleBoxAudio])

    return { playTileClick, playCornerClick, playSolved }
}

export function usePuzzleState() {
    const { currentLevel, addSolvedPuzzle } = useContext(AppContext)
    const levelId = currentLevel.id

    const [puzzle, setPuzzle] = useState<Puzzle>(structuredClone(currentLevel.puzzle))

    useEffect(() => {
        setPuzzle(structuredClone(currentLevel.puzzle))
    }, [currentLevel])

    const { playTileClick, playCornerClick, playSolved } = usePuzzleAudio()

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
                    addSolvedPuzzle(levelId)
                    playSolved()
                    break
                case "reset":
                    setPuzzle(structuredClone(currentLevel.puzzle))
                    break
            }
        },
        [puzzle, levelId, currentLevel.puzzle, addSolvedPuzzle, playCornerClick, playSolved]
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

    return { puzzle, onCornerClick, onTileClick }
}
