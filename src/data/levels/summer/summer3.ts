
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer3: Level = {
    id: "summer3",
    name: "三",
    puzzle: {
        corners: {
            tl: { color: Colors.Blue },
            tr: { color: Colors.Violet },
            bl: { color: Colors.Green },
            br: { color: Colors.Yellow },
        },
        tiles: [
            [{ color: Colors.Blue }, { color: Colors.Blue }, { color: Colors.Gray }],
            [{ color: Colors.Violet }, { color: Colors.Green }, { color: Colors.Gray }],
            [{ color: Colors.Yellow }, { color: Colors.Yellow }, { color: Colors.Green }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
