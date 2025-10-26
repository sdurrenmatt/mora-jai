
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer8: Level = {
    id: "summer8",
    name: "八",
    difficulty: "Hard",
    puzzle: {
        corners: {
            tl: { color: Colors.Pink },
            tr: { color: Colors.Pink },
            bl: { color: Colors.Pink },
            br: { color: Colors.Pink },
        },
        tiles: [
            [{ color: Colors.Pink }, { color: Colors.Pink }, { color: Colors.Gray }],
            [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Gray }],
            [{ color: Colors.Orange }, { color: Colors.Orange }, { color: Colors.Orange }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodō)",
    }
}
