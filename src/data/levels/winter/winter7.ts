
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const winter7: Level = {
    id: "winter7",
    name: "七",
    puzzle: {
        corners: {
            tl: { color: Colors.Black },
            tr: { color: Colors.Blue },
            bl: { color: Colors.Blue },
            br: { color: Colors.Black },
        },
        tiles: [
            [{ color: Colors.Red }, { color: Colors.Red }, { color: Colors.White }],
            [{ color: Colors.Orange }, { color: Colors.Orange }, { color: Colors.Blue }],
            [{ color: Colors.White }, { color: Colors.Yellow }, { color: Colors.Pink }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
