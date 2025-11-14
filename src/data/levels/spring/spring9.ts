
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const spring9: Level = {
    id: "spring9",
    name: "九",
    puzzle: {
        corners: {
            tl: { color: Colors.Violet },
            tr: { color: Colors.White },
            bl: { color: Colors.White },
            br: { color: Colors.Violet },
        },
        tiles: [
            [{ color: Colors.Green }, { color: Colors.Gray }, { color: Colors.Violet }],
            [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Gray }],
            [{ color: Colors.Violet }, { color: Colors.White }, { color: Colors.Pink }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}