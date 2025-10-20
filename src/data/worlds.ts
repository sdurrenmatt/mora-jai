import type { World } from "../types/level"
import { autumn1 } from "./levels/autumn/autumn1"
import { autumn2 } from "./levels/autumn/autumn2"
import { autumn3 } from "./levels/autumn/autumn3"
import { spring1 } from "./levels/spring/spring1"
import { spring2 } from "./levels/spring/spring2"
import { spring3 } from "./levels/spring/spring3"
import { summer1 } from "./levels/summer/summer1"
import { summer2 } from "./levels/summer/summer2"
import { summer3 } from "./levels/summer/summer3"
import { winter1 } from "./levels/winter/winter1"
import { winter2 } from "./levels/winter/winter2"
import { winter3 } from "./levels/winter/winter3"

export const worlds: World[] = [
    {
        id: "spring",
        name: "春",
        levels: [spring1, spring2, spring3],
    },
    {
        id: "summer",
        name: "夏",
        levels: [summer1, summer2, summer3],
    },
    {
        id: "autumn",
        name: "秋",
        levels: [autumn1, autumn2, autumn3],
    },
    {
        id: "winter",
        name: "冬",
        levels: [winter1, winter2, winter3],
    }
]
