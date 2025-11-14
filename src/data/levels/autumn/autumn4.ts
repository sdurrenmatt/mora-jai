
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const autumn4: Level = {
    id: "autumn4",
    name: "四",
    puzzle: {
        corners: {
            tl: { color: Colors.Orange },
            tr: { color: Colors.Orange },
            bl: { color: Colors.Orange },
            br: { color: Colors.Orange },
        },
        tiles: [
            [{ color: Colors.Blue }, { color: Colors.Pink }, { color: Colors.White }],
            [{ color: Colors.Orange }, { color: Colors.Gray }, { color: Colors.Green }],
            [{ color: Colors.Pink }, { color: Colors.Red }, { color: Colors.Orange }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
