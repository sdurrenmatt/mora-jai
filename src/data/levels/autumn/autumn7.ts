
import rewardImage from "../../../assets/images/rewards/autumn/nou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const autumn7: Level = {
    id: "autumn7",
    name: "七",
    puzzle: {
        corners: {
            tl: { color: Colors.Black },
            tr: { color: Colors.Black },
            bl: { color: Colors.Orange },
            br: { color: Colors.Orange },
        },
        tiles: [
            [{ color: Colors.White }, { color: Colors.Green }, { color: Colors.Orange }],
            [{ color: Colors.Orange }, { color: Colors.Gray }, { color: Colors.Red }],
            [{ color: Colors.Orange }, { color: Colors.Yellow }, { color: Colors.Gray }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "能 (Nou)",
    }
}
