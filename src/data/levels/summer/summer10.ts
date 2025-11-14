
import rewardImage from "../../../assets/images/rewards/spring/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const summer10: Level = {
    id: "summer10",
    name: "十",
    puzzle: {
        corners: {
            tl: { color: Colors.Green },
            tr: { color: Colors.Green },
            bl: { color: Colors.Green },
            br: { color: Colors.Green },
        },
        tiles: [
            [{ color: Colors.White }, { color: Colors.White }, { color: Colors.Red }],
            [{ color: Colors.Black }, { color: Colors.Orange }, { color: Colors.Blue }],
            [{ color: Colors.Green }, { color: Colors.Blue }, { color: Colors.Green }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
