import { useCallback, useEffect, useRef, useState } from "react"
import clickSound from "../assets/sounds/click.mp3"
import lightSwitchSound from "../assets/sounds/light-switch.mp3"
import openingLittleBoxSound from "../assets/sounds/opening-little-box.mp3"
import { pressCorner, pressTile } from "../lib/puzzle"
import type { CornerPosition, Puzzle } from "../lib/puzzle/types"
import { useAudio } from "./useAudio"

export function usePuzzleState(initialPuzzle: Puzzle) {
    const [puzzle, setPuzzle] = useState(initialPuzzle)
    const initialRef = useRef(initialPuzzle)

    useEffect(() => {
        initialRef.current = initialPuzzle
    }, [initialPuzzle])

    const lightSwitchAudio = useAudio(lightSwitchSound)
    const clickAudio = useAudio(clickSound)
    const openingLittleBoxAudio = useAudio(openingLittleBoxSound)

    useEffect(() => {
        if (puzzle.solved) openingLittleBoxAudio.play()
    }, [puzzle.solved, openingLittleBoxAudio])

    const onCornerClick = useCallback((position: CornerPosition) => {
        lightSwitchAudio.play()

        const result = pressCorner(puzzle, position)
        switch (result.type) {
            case "updated":
            case "solved":
                setPuzzle(result.puzzle)
                break
            case "reset":
                setPuzzle(initialRef.current)
                break
        }
    }, [puzzle, lightSwitchAudio])

    const onTileClick = useCallback((i: number, j: number) => {
        clickAudio.play()

        const result = pressTile(puzzle, i, j)
        switch (result.type) {
            case "updated":
                setPuzzle(result.puzzle)
                break
        }
    }, [puzzle, clickAudio])

    return { puzzle, onCornerClick, onTileClick }
}
