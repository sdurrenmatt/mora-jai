
import rewardImage from "../../../assets/images/rewards/spring/sensu.png"
import { Colors } from "../../../lib/puzzle"
import type { Level } from "../../../types/level"

export const spring2: Level = {
    id: "spring2",
    name: "二",
    puzzle: {
        corners: {
            tl: { color: Colors.White },
            tr: { color: Colors.White },
            bl: { color: Colors.White },
            br: { color: Colors.White },
        },
        tiles: [
            [{ color: Colors.Pink }, { color: Colors.Gray }, { color: Colors.Gray }],
            [{ color: Colors.Pink }, { color: Colors.Green }, { color: Colors.Green }],
            [{ color: Colors.White }, { color: Colors.Gray }, { color: Colors.Gray }],
        ],
    },
    reward: {
        image: rewardImage,
        description: "扇子 (Sensu)",
    }
}
