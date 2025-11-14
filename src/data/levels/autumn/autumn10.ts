
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const autumn10: Level = {
    id: "autumn10",
    name: "十",
    puzzle: {
        corners: {
            tl: { color: Colors.Orange },
            tr: { color: Colors.Orange },
            bl: { color: Colors.White },
            br: { color: Colors.White },
        },
        tiles: [
            [{ color: Colors.White }, { color: Colors.Gray }, { color: Colors.Red }],
            [{ color: Colors.Black }, { color: Colors.White }, { color: Colors.Orange }],
            [{ color: Colors.Blue }, { color: Colors.Orange }, { color: Colors.Green }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
