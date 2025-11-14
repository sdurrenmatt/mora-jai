
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const spring3: Level = {
    id: "spring3",
    name: "三",
    puzzle: {
        corners: {
            tl: { color: Colors.Green },
            tr: { color: Colors.Green },
            bl: { color: Colors.Green },
            br: { color: Colors.Green },
        },
        tiles: [
            [{ color: Colors.Green }, { color: Colors.Green }, { color: Colors.Yellow }],
            [{ color: Colors.Gray }, { color: Colors.Pink }, { color: Colors.Green }],
            [{ color: Colors.Gray }, { color: Colors.Gray }, { color: Colors.Green }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
