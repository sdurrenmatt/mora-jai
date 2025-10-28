import { createContext, useCallback, useMemo } from "react"
import { useLocalStorage } from "usehooks-ts"
import { worlds } from "../data/worlds"
import type { Level } from "../types/level"

export type GameContextType = {
    currentWorld: string
    currentLevel: Level
    solvedPuzzles: Set<string>
    setCurrentWorld: (world: string) => void
    setCurrentLevel: (level: Level) => void
    addSolvedPuzzle: (levelId: string) => void
}

export const GameContext = createContext<GameContextType>({
    currentWorld: worlds[0].name,
    currentLevel: worlds[0].levels[0],
    solvedPuzzles: new Set(),
    setCurrentWorld: () => { },
    setCurrentLevel: () => { },
    addSolvedPuzzle: () => { },
})

export function useGameState() {
    const [currentWorld, setCurrentWorld] = useLocalStorage<string>("currentWorld", worlds[0].name)
    const [currentLevel, setCurrentLevel] = useLocalStorage<Level>("currentLevel", worlds[0].levels[0])
    const [solvedPuzzles, setSolvedPuzzles] = useLocalStorage<Set<string>>("solvedPuzzles", new Set(), {
        serializer: (value) => JSON.stringify([...value]),
        deserializer: (value) => new Set(JSON.parse(value)),
    })

    const addSolvedPuzzle = useCallback((levelId: string) => {
        setSolvedPuzzles(prev => new Set(prev).add(levelId))
    }, [])

    return useMemo(() => ({
        currentWorld,
        currentLevel,
        solvedPuzzles,
        setCurrentWorld,
        setCurrentLevel,
        addSolvedPuzzle,
    }), [
        currentWorld,
        currentLevel,
        solvedPuzzles,
    ])
}
