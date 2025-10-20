
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const winter3: Level = {
    id: "winter3",
    name: "冬3",
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
