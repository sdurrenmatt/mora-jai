import type { World } from "../types/level"
import { autumn1 } from "./levels/autumn/autumn1"
import { autumn10 } from "./levels/autumn/autumn10"
import { autumn2 } from "./levels/autumn/autumn2"
import { autumn3 } from "./levels/autumn/autumn3"
import { autumn4 } from "./levels/autumn/autumn4"
import { autumn5 } from "./levels/autumn/autumn5"
import { autumn6 } from "./levels/autumn/autumn6"
import { autumn7 } from "./levels/autumn/autumn7"
import { autumn8 } from "./levels/autumn/autumn8"
import { autumn9 } from "./levels/autumn/autumn9"
import { spring1 } from "./levels/spring/spring1"
import { spring10 } from "./levels/spring/spring10"
import { spring2 } from "./levels/spring/spring2"
import { spring3 } from "./levels/spring/spring3"
import { spring4 } from "./levels/spring/spring4"
import { spring5 } from "./levels/spring/spring5"
import { spring6 } from "./levels/spring/spring6"
import { spring7 } from "./levels/spring/spring7"
import { spring8 } from "./levels/spring/spring8"
import { spring9 } from "./levels/spring/spring9"
import { summer1 } from "./levels/summer/summer1"
import { summer10 } from "./levels/summer/summer10"
import { summer2 } from "./levels/summer/summer2"
import { summer3 } from "./levels/summer/summer3"
import { summer4 } from "./levels/summer/summer4"
import { summer5 } from "./levels/summer/summer5"
import { summer6 } from "./levels/summer/summer6"
import { summer7 } from "./levels/summer/summer7"
import { summer8 } from "./levels/summer/summer8"
import { summer9 } from "./levels/summer/summer9"
import { winter1 } from "./levels/winter/winter1"
import { winter10 } from "./levels/winter/winter10"
import { winter2 } from "./levels/winter/winter2"
import { winter3 } from "./levels/winter/winter3"
import { winter4 } from "./levels/winter/winter4"
import { winter5 } from "./levels/winter/winter5"
import { winter6 } from "./levels/winter/winter6"
import { winter7 } from "./levels/winter/winter7"
import { winter8 } from "./levels/winter/winter8"
import { winter9 } from "./levels/winter/winter9"

export const worlds: World[] = [
    {
        id: "spring",
        name: "春",
        levels: [spring1, spring2, spring3, spring4, spring5, spring6, spring7, spring8, spring9, spring10],
    },
    {
        id: "summer",
        name: "夏",
        levels: [summer1, summer2, summer3, summer4, summer5, summer6, summer7, summer8, summer9, summer10],
    },
    {
        id: "autumn",
        name: "秋",
        levels: [autumn1, autumn2, autumn3, autumn4, autumn5, autumn6, autumn7, autumn8, autumn9, autumn10],
    },
    {
        id: "winter",
        name: "冬",
        levels: [winter1, winter2, winter3, winter4, winter5, winter6, winter7, winter8, winter9, winter10],
    }
]
