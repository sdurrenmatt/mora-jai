
import rewardImage from "../../../assets/images/rewards/winter/sou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const winter3: Level = {
    id: "winter3",
    name: "三",
    puzzle: {
        corners: {
            tl: { color: Colors.Blue },
            tr: { color: Colors.Blue },
            bl: { color: Colors.Blue },
            br: { color: Colors.Blue },
        },
        tiles: [
            [{ color: Colors.Orange }, { color: Colors.Gray }, { color: Colors.Black }],
            [{ color: Colors.Green }, { color: Colors.Gray }, { color: Colors.Black }],
            [{ color: Colors.White }, { color: Colors.Blue }, { color: Colors.White }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "僧 (Sou)",
    }
}
