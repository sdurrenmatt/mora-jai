
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const autumn9: Level = {
    id: "autumn9",
    name: "九",
    puzzle: {
        corners: {
            tl: { color: Colors.Orange },
            tr: { color: Colors.Orange },
            bl: { color: Colors.Orange },
            br: { color: Colors.Orange },
        },
        tiles: [
            [{ color: Colors.White }, { color: Colors.Orange }, { color: Colors.Gray }],
            [{ color: Colors.Orange }, { color: Colors.Blue }, { color: Colors.Gray }],
            [{ color: Colors.Black }, { color: Colors.Green }, { color: Colors.Yellow }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
