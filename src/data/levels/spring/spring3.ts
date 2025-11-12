
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const spring3: Level = {
    id: "spring3",
    name: "三",
    puzzle: {
        corners: {
            tl: { color: Colors.Pink },
            tr: { color: Colors.White },
            bl: { color: Colors.White },
            br: { color: Colors.Pink },
        },
        tiles: [
            [{ color: Colors.Pink }, { color: Colors.Gray }, { color: Colors.Pink }],
            [{ color: Colors.Gray }, { color: Colors.Pink }, { color: Colors.White }],
            [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Gray }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
