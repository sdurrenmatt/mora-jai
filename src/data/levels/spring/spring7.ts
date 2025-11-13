
import rewardImage from "../../../assets/images/rewards/shodou.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const spring7: Level = {
    id: "spring7",
    name: "七",
    puzzle: {
        corners: {
            tl: { color: Colors.Violet },
            tr: { color: Colors.Violet },
            bl: { color: Colors.Violet },
            br: { color: Colors.Violet },
        },
        tiles: [
            [{ color: Colors.Violet }, { color: Colors.Violet }, { color: Colors.Gray }],
            [{ color: Colors.Pink }, { color: Colors.Green }, { color: Colors.Gray }],
            [{ color: Colors.Violet }, { color: Colors.Violet }, { color: Colors.Gray }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "書道 (Shodou)",
    }
}
