
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const spring10: Level = {
    id: "spring10",
    name: "十",
    puzzle: {
        corners: {
            tl: { color: Colors.Green },
            tr: { color: Colors.Pink },
            bl: { color: Colors.Blue },
            br: { color: Colors.Yellow },
        },
        tiles: [
            [{ color: Colors.Blue }, { color: Colors.Gray }, { color: Colors.Pink }],
            [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Gray }],
            [{ color: Colors.Yellow }, { color: Colors.Green }, { color: Colors.Yellow }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}