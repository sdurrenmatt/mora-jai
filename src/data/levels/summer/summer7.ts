
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer7: Level = {
    id: "summer7",
    name: "七",
    puzzle: {
        corners: {
            tl: { color: Colors.Red },
            tr: { color: Colors.Red },
            bl: { color: Colors.Blue },
            br: { color: Colors.Blue },
        },
        tiles: [
            [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Gray }],
            [{ color: Colors.Gray }, { color: Colors.Black }, { color: Colors.Blue }],
            [{ color: Colors.Gray }, { color: Colors.Red }, { color: Colors.White }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
