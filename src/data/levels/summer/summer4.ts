
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer4: Level = {
    id: "summer4",
    name: "四",
    puzzle: {
        corners: {
            tl: { color: Colors.Yellow },
            tr: { color: Colors.Yellow },
            bl: { color: Colors.Yellow },
            br: { color: Colors.Yellow },
        },
        tiles: [
            [{ color: Colors.Gray }, { color: Colors.Orange }, { color: Colors.Blue }],
            [{ color: Colors.Yellow }, { color: Colors.Green }, { color: Colors.Gray }],
            [{ color: Colors.Yellow }, { color: Colors.Orange }, { color: Colors.Blue }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
