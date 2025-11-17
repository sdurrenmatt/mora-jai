
import rewardImage from "../../../assets/images/rewards/autumn/sumou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const autumn8: Level = {
    id: "autumn8",
    name: "八",
    puzzle: {
        corners: {
            tl: { color: Colors.Black },
            tr: { color: Colors.Black },
            bl: { color: Colors.Orange },
            br: { color: Colors.Orange },
        },
        tiles: [
            [{ color: Colors.Blue }, { color: Colors.Gray }, { color: Colors.Red }],
            [{ color: Colors.Green }, { color: Colors.Orange }, { color: Colors.Black }],
            [{ color: Colors.White }, { color: Colors.Gray }, { color: Colors.Orange }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "相撲 (Sumou)",
    }
}
