
import useSound from "use-sound"
import clickSound from "../assets/sounds/click.mp3"
import openSound from "../assets/sounds/open.mp3"
import switchSound from "../assets/sounds/switch.mp3"

export function usePuzzleAudio() {
  const [playTileClick] = useSound(clickSound)
  const [playCornerClick] = useSound(switchSound)
  const [playSolved] = useSound(openSound)

  return { playTileClick, playCornerClick, playSolved }
}
