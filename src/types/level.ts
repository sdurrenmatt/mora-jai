import type { Puzzle } from "../lib/puzzle"

export type Reward = {
    image: string
    description: string
}

export type Level = {
    id: string
    puzzle: Puzzle
    reward: Reward
}