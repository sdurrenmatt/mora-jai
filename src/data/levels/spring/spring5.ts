
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const spring5: Level = {
    id: "spring5",
    name: "五",
    puzzle: {
        corners: {
            tl: { color: Colors.Green },
            tr: { color: Colors.Yellow },
            bl: { color: Colors.Yellow },
            br: { color: Colors.Green },
        },
        tiles: [
            [{ color: Colors.Pink }, { color: Colors.Gray }, { color: Colors.Gray }],
            [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Yellow }],
            [{ color: Colors.Green }, { color: Colors.Green }, { color: Colors.Yellow }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
