
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer9: Level = {
    id: "summer9",
    name: "九",
    puzzle: {
        corners: {
            tl: { color: Colors.White },
            tr: { color: Colors.White },
            bl: { color: Colors.Blue },
            br: { color: Colors.Blue },
        },
        tiles: [
            [{ color: Colors.Gray }, { color: Colors.Blue }, { color: Colors.Orange }],
            [{ color: Colors.White }, { color: Colors.Orange }, { color: Colors.Blue }],
            [{ color: Colors.Orange }, { color: Colors.Gray }, { color: Colors.Orange }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
