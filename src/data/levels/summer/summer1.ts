
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer1: Level = {
    id: "summer1",
    name: "一",
    puzzle: {
        corners: {
            tl: { color: Colors.Green },
            tr: { color: Colors.Green },
            bl: { color: Colors.Blue },
            br: { color: Colors.Blue },
        },
        tiles: [
            [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Gray }],
            [{ color: Colors.Green }, { color: Colors.Gray }, { color: Colors.Green }],
            [{ color: Colors.Blue }, { color: Colors.Yellow }, { color: Colors.Blue }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
