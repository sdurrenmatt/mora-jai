
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer5: Level = {
    id: "summer5",
    name: "五",
    puzzle: {
        corners: {
            tl: { color: Colors.Blue },
            tr: { color: Colors.Blue },
            bl: { color: Colors.Blue },
            br: { color: Colors.Blue },
        },
        tiles: [
            [{ color: Colors.White }, { color: Colors.Blue }, { color: Colors.Green }],
            [{ color: Colors.Black }, { color: Colors.Green }, { color: Colors.Gray }],
            [{ color: Colors.White }, { color: Colors.Gray }, { color: Colors.White }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
