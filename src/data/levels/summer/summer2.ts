
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer2: Level = {
    id: "summer2",
    name: "二",
    puzzle: {
        corners: {
            tl: { color: Colors.Blue },
            tr: { color: Colors.Blue },
            bl: { color: Colors.White },
            br: { color: Colors.White },
        },
        tiles: [
            [{ color: Colors.Gray }, { color: Colors.Green }, { color: Colors.Gray }],
            [{ color: Colors.White }, { color: Colors.White }, { color: Colors.Green }],
            [{ color: Colors.Blue }, { color: Colors.Green }, { color: Colors.Gray }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
