
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const winter8: Level = {
    id: "winter8",
    name: "八",
    puzzle: {
        corners: {
            tl: { color: Colors.Black },
            tr: { color: Colors.Blue },
            bl: { color: Colors.Blue },
            br: { color: Colors.Black },
        },
        tiles: [
            [{ color: Colors.Black }, { color: Colors.Blue }, { color: Colors.Gray }],
            [{ color: Colors.Gray }, { color: Colors.Violet }, { color: Colors.Yellow }],
            [{ color: Colors.White }, { color: Colors.Red }, { color: Colors.Orange }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
