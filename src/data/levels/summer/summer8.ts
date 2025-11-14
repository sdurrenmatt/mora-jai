
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer8: Level = {
    id: "summer8",
    name: "八",
    puzzle: {
        corners: {
            tl: { color: Colors.Yellow },
            tr: { color: Colors.Yellow },
            bl: { color: Colors.Yellow },
            br: { color: Colors.Yellow },
        },
        tiles: [
            [{ color: Colors.Yellow }, { color: Colors.Gray }, { color: Colors.Gray }],
            [{ color: Colors.Orange }, { color: Colors.Black }, { color: Colors.Blue }],
            [{ color: Colors.Yellow }, { color: Colors.Gray }, { color: Colors.Orange }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
