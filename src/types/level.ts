import type { Puzzle } from "../lib/puzzle"

export type World = {
    id: string,
    name: string,
    levels: Level[]
}

export type Reward = {
    image: string
    description: string
}

export type Level = {
    id: string
    name: string,
    puzzle: Puzzle
    reward: Reward
}