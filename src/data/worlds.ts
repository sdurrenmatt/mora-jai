import type { Level, World } from "../types/level"

const springModules = import.meta.glob<{ default: Level }>("./levels/spring/*.ts", { eager: true })
const summerModules = import.meta.glob<{ default: Level }>("./levels/summer/*.ts", { eager: true })
const autumnModules = import.meta.glob<{ default: Level }>("./levels/autumn/*.ts", { eager: true })
const winterModules = import.meta.glob<{ default: Level }>("./levels/winter/*.ts", { eager: true })

function getSortedLevels(modules: Record<string, { default: Level }>): Level[] {
  return Object.entries(modules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, module]) => module.default)
}

export const worlds: World[] = [
  { id: "spring", name: "春", levels: getSortedLevels(springModules) },
  { id: "summer", name: "夏", levels: getSortedLevels(summerModules) },
  { id: "autumn", name: "秋", levels: getSortedLevels(autumnModules) },
  { id: "winter", name: "冬", levels: getSortedLevels(winterModules) },
]
