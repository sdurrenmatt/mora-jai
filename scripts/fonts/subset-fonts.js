import fs from 'fs'
import path from 'path'
import subsetFont from 'subset-font'

const DATA_DIR = path.resolve('./src/data')
const INPUT_DIR = path.resolve('./scripts/fonts/input')
const OUTPUT_DIR = path.resolve('./public/fonts')
const CHARS_FILE = path.resolve('./scripts/fonts/chars.txt')

const LATIN_RANGES = [
    [0x20, 0x7E], // Basic Latin
    [0xA0, 0xFF]  // Latin-1 Supplement
]

const JAPANESE_RANGES = [
    [0x3040, 0x309F], // Hiragana
    [0x30A0, 0x30FF], // Katakana
    [0xFF65, 0xFF9F], // Halfwidth Katakana
    [0x4E00, 0x9FFF], // Kanji
    [0x3000, 0x303F]  // Japanese punctuation
]

const charInRanges = (char, ranges) => {
    const code = char.charCodeAt(0)
    return ranges.some(([start, end]) => code >= start && code <= end)
}

const charsFromRanges = (ranges) =>
    ranges.flatMap(([start, end]) =>
        Array.from({ length: end - start + 1 }, (_, i) => String.fromCharCode(start + i))
    ).join('')

const getTsFiles = (dir) =>
    fs.readdirSync(dir).flatMap(file => {
        const full = path.join(dir, file)
        const stat = fs.statSync(full)
        if (stat.isDirectory()) return getTsFiles(full)
        return /\.(ts|tsx)$/i.test(file) ? [full] : []
    })

const extractJapaneseChars = (files) => {
    const chars = new Set()
    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8')
        const matches = content.match(/["'`](.*?)["'`]/gs) || []
        for (const str of matches) {
            for (const c of str) {
                if (charInRanges(c, JAPANESE_RANGES)) chars.add(c)
            }
        }
    }
    return chars
}

const writeCharsFile = (chars, filePath) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, chars)
    console.log(`Generated chars.txt with ${chars.length} characters.`)
}

const subsetFonts = async (inputDir, outputDir, chars) => {
    fs.mkdirSync(outputDir, { recursive: true })
    const fonts = fs.readdirSync(inputDir).filter(f => /\.(woff2?|ttf|otf)$/i.test(f))

    await Promise.all(fonts.map(async (fontFile) => {
        const inputPath = path.join(inputDir, fontFile)
        const outputPath = path.join(outputDir, fontFile.replace(/(\.\w+)$/, '-Subset.woff2'))
        console.log(`Subsetting ${fontFile} → ${path.basename(outputPath)}...`)
        const fontBuffer = fs.readFileSync(inputPath)
        const subsetBuffer = await subsetFont(fontBuffer, chars, { targetFormat: 'woff2' })
        fs.writeFileSync(outputPath, subsetBuffer)
    }))

    console.log('All fonts subsetted successfully!')
}

const main = async () => {
    const latinChars = charsFromRanges(LATIN_RANGES)
    const tsFiles = getTsFiles(DATA_DIR)
    const japaneseChars = extractJapaneseChars(tsFiles)
    const allChars = latinChars + [...japaneseChars].join('')

    writeCharsFile(allChars, CHARS_FILE)
    await subsetFonts(INPUT_DIR, OUTPUT_DIR, allChars)
}

main().catch(err => {
    console.error('Font subsetting failed:', err)
    process.exit(1)
})
