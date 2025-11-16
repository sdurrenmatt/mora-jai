
import rewardImage from "../../../assets/images/rewards/autumn/kitsune.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const autumn6: Level = {
    id: "autumn6",
    name: "六",
    puzzle: {
        corners: {
            tl: { color: Colors.Red },
            tr: { color: Colors.Red },
            bl: { color: Colors.Orange },
            br: { color: Colors.Orange },
        },
        tiles: [
            [{ color: Colors.Gray }, { color: Colors.Green }, { color: Colors.Gray }],
            [{ color: Colors.Violet }, { color: Colors.Black }, { color: Colors.Orange }],
            [{ color: Colors.Orange }, { color: Colors.Gray }, { color: Colors.Red }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "狐 (Kitsune)",
    }
}
