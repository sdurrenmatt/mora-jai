
import useSound from "use-sound"
import clickSound from "../assets/sounds/click.mp3"
import lightSwitchSound from "../assets/sounds/light-switch.mp3"
import openingLittleBoxSound from "../assets/sounds/opening-little-box.mp3"

export function usePuzzleAudio() {
    const [playTileClick] = useSound(clickSound)
    const [playCornerClick] = useSound(lightSwitchSound)
    const [playSolved] = useSound(openingLittleBoxSound)

    return { playTileClick, playCornerClick, playSolved }
}
