
import rewardImage from "../../../assets/images/rewards/autumn/shigure.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const autumn5: Level = {
    id: "autumn5",
    name: "五",
    puzzle: {
        corners: {
            tl: { color: Colors.Red },
            tr: { color: Colors.Red },
            bl: { color: Colors.Orange },
            br: { color: Colors.Orange },
        },
        tiles: [
            [{ color: Colors.Orange }, { color: Colors.Orange }, { color: Colors.Gray }],
            [{ color: Colors.Black }, { color: Colors.White }, { color: Colors.Red }],
            [{ color: Colors.Gray }, { color: Colors.Orange }, { color: Colors.Orange }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "時雨 (Shigure)",
    }
}
