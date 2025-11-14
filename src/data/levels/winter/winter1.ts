
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const winter1: Level = {
    id: "winter1",
    name: "一",
    puzzle: {
        corners: {
            tl: { color: Colors.White },
            tr: { color: Colors.White },
            bl: { color: Colors.White },
            br: { color: Colors.White },
        },
        tiles: [
            [{ color: Colors.Green }, { color: Colors.White }, { color: Colors.Black }],
            [{ color: Colors.White }, { color: Colors.Gray }, { color: Colors.White }],
            [{ color: Colors.Black }, { color: Colors.White }, { color: Colors.Yellow }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
