import { Colors, CornerPositions, type Color, type CornerPosition, type Puzzle } from "./types"
import {
    checkMatched,
    checkSolved,
    findMajorColor,
    getAdjacentPositions,
    getAdjacentTiles,
    getSurroundingPositions,
    markMatched,
    markSolved,
    shiftRow,
    shiftTiles,
    swapTiles,
    unmarkMatched
} from "./utils"

export type PuzzleActionResult =
    | { type: "noop" }
    | { type: "updated"; puzzle: Puzzle }
    | { type: "solved"; puzzle: Puzzle }
    | { type: "reset" }

export function pressCorner(puzzle: Puzzle, position: CornerPosition): PuzzleActionResult {
    if (puzzle.corners[position].matched) return { type: "noop" }

    if (checkMatched(puzzle, position)) {
        const updated = markMatched(puzzle, position)

        if (checkSolved(updated)) {
            const solved = markSolved(updated)
            return { type: "solved", puzzle: solved }
        }

        return { type: "updated", puzzle: updated }
    }

    return { type: "reset" }
}

type TilePressHandler = (p: Puzzle, i: number, j: number) => Puzzle

const colorTileHandlers: Record<Color, TilePressHandler> = {
    [Colors.Black]: (p, i, _j) => pressBlackTile(p, i),
    [Colors.Blue]: (p, i, j) => pressBlueTile(p, i, j),
    [Colors.Gray]: (p, _i, _j) => pressGrayTile(p),
    [Colors.Green]: (p, i, j) => pressGreenTile(p, i, j),
    [Colors.Orange]: (p, i, j) => pressOrangeTile(p, i, j),
    [Colors.Pink]: (p, i, j) => pressPinkTile(p, i, j),
    [Colors.Red]: (p, _i, _j) => pressRedTile(p),
    [Colors.Violet]: (p, i, j) => pressVioletTile(p, i, j),
    [Colors.White]: (p, i, j) => pressWhiteTile(p, i, j),
    [Colors.Yellow]: (p, i, j) => pressYellowTile(p, i, j),
}

function pressBlackTile(p: Puzzle, i: number): Puzzle {
    return shiftRow(p, i)
}

function pressBlueTile(p: Puzzle, i: number, j: number): Puzzle {
    const center = Math.floor(p.tiles.length / 2)
    const middleColor = p.tiles[center][center].color

    switch (middleColor) {
        case Colors.Blue: return p
        case Colors.Red: return pressRedTile(p, Colors.Blue)
        case Colors.White: return pressWhiteTile(p, i, j, Colors.Blue)
        default: return colorTileHandlers[middleColor]?.(p, i, j) ?? p
    }
}

function pressGrayTile(p: Puzzle): Puzzle {
    return p
}

function pressGreenTile(p: Puzzle, i: number, j: number): Puzzle {
    return swapTiles(p, i, j, p.tiles.length - 1 - i, p.tiles[0].length - 1 - j)
}

function pressOrangeTile(p: Puzzle, i: number, j: number): Puzzle {
    const adjacentTiles = getAdjacentTiles(p, i, j)
    const majorColor = findMajorColor(adjacentTiles)

    if (majorColor === null) return p

    const newTiles = p.tiles.map(row => [...row])
    newTiles[i][j] = { ...newTiles[i][j], color: majorColor }

    return { ...p, tiles: newTiles }
}

function pressPinkTile(p: Puzzle, i: number, j: number): Puzzle {
    const positions = getSurroundingPositions(p, i, j)
    return shiftTiles(p, positions)
}

function pressRedTile(p: Puzzle, mimicColor: Color = Colors.Red): Puzzle {
    const colorSwitch: Partial<Record<Color, Color>> = {
        [Colors.White]: Colors.Black,
        [Colors.Black]: mimicColor,
    }
    const newTiles = p.tiles.map(row =>
        row.map(tile => ({ ...tile, color: colorSwitch[tile.color] ?? tile.color }))
    )
    return { ...p, tiles: newTiles }
}

function pressVioletTile(p: Puzzle, i: number, j: number): Puzzle {
    if (i === p.tiles.length - 1) return p
    return swapTiles(p, i, j, i + 1, j)
}

function pressWhiteTile(p: Puzzle, i: number, j: number, mimicColor: Color = Colors.White): Puzzle {
    const newTiles = p.tiles.map(row => [...row])
    newTiles[i][j] = { ...newTiles[i][j], color: Colors.Gray }

    const adjacentPositions = getAdjacentPositions(p, i, j)
    for (const [x, y] of adjacentPositions) {
        if (newTiles[x][y].color === Colors.Gray)
            newTiles[x][y] = { ...newTiles[x][y], color: mimicColor }
        else if (newTiles[x][y].color === mimicColor)
            newTiles[x][y] = { ...newTiles[x][y], color: Colors.Gray }
    }

    return { ...p, tiles: newTiles }
}

function pressYellowTile(p: Puzzle, i: number, j: number): Puzzle {
    if (i === 0) return p
    return swapTiles(p, i, j, i - 1, j)
}

export function pressTile(p: Puzzle, i: number, j: number): PuzzleActionResult {
    const color = p.tiles[i][j].color

    const afterTilePress = colorTileHandlers[color](p, i, j)

    const cornersToUpdate = Object.values(CornerPositions).filter(
        position => afterTilePress.corners[position].matched
    )

    const afterCornersUpdate = cornersToUpdate.reduce(
        (puzzle, position) => checkMatched(puzzle, position) ? puzzle : unmarkMatched(puzzle, position),
        afterTilePress
    )

    if (afterCornersUpdate === p) return { type: "noop" }

    return { type: "updated", puzzle: afterCornersUpdate }
}
