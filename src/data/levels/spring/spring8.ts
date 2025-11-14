
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const spring8: Level = {
    id: "spring8",
    name: "八",
    puzzle: {
        corners: {
            tl: { color: Colors.Green },
            tr: { color: Colors.Pink },
            bl: { color: Colors.Pink },
            br: { color: Colors.Green },
        },
        tiles: [
            [{ color: Colors.Pink }, { color: Colors.Yellow }, { color: Colors.Gray }],
            [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Green }],
            [{ color: Colors.Gray }, { color: Colors.Green }, { color: Colors.Pink }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
