
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const spring6: Level = {
    id: "spring6",
    name: "六",
    puzzle: {
        corners: {
            tl: { color: Colors.Pink },
            tr: { color: Colors.Yellow },
            bl: { color: Colors.Yellow },
            br: { color: Colors.Pink },
        },
        tiles: [
            [{ color: Colors.Pink }, { color: Colors.Green }, { color: Colors.Gray }],
            [{ color: Colors.Gray }, { color: Colors.Yellow }, { color: Colors.Gray }],
            [{ color: Colors.Gray }, { color: Colors.Yellow }, { color: Colors.Pink }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
