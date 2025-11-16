
import rewardImage from "../../../assets/images/rewards/winter/ikebana.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const winter9: Level = {
    id: "winter9",
    name: "九",
    puzzle: {
        corners: {
            tl: { color: Colors.White },
            tr: { color: Colors.White },
            bl: { color: Colors.White },
            br: { color: Colors.White },
        },
        tiles: [
            [{ color: Colors.Orange }, { color: Colors.White }, { color: Colors.Red }],
            [{ color: Colors.Blue }, { color: Colors.Pink }, { color: Colors.Blue }],
            [{ color: Colors.Red }, { color: Colors.Red }, { color: Colors.Gray }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "生け花 (Ikebana)",
    }
}
