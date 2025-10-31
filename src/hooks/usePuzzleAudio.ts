
import { useCallback, useMemo } from "react"
import clickSound from "../assets/sounds/click.mp3"
import lightSwitchSound from "../assets/sounds/light-switch.mp3"
import openingLittleBoxSound from "../assets/sounds/opening-little-box.mp3"

export function usePuzzleAudio() {
    const clickAudio = useMemo(() => new Audio(clickSound), [])
    const lightSwitchAudio = useMemo(() => new Audio(lightSwitchSound), [])
    const openingLittleBoxAudio = useMemo(() => new Audio(openingLittleBoxSound), [])

    const playTileClick = useCallback(() => clickAudio.play(), [])
    const playCornerClick = useCallback(() => lightSwitchAudio.play(), [])
    const playSolved = useCallback(() => openingLittleBoxAudio.play(), [])

    return { playTileClick, playCornerClick, playSolved }
}
