# Mora Jai – Puzzle Game

![Play Online](https://img.shields.io/badge/site-online-green)
![Made with React](https://img.shields.io/badge/Made%20with-React-blue?logo=react)
![License](https://img.shields.io/badge/license-Proprietary-lightgrey)

<img src="/public/images/og-image.png" width="100%"/>

**Mora Jai** is a fan-made puzzle game inspired by *Blue Prince* and its iconic Mora Jai puzzle boxes. While preserving the original mechanics, this project introduces a **distinct visual style influenced by Japanese aesthetics**, combining minimalism, color symbolism, and a serene atmosphere.

👉 **Play the game here:** [https://sdurrenmatt.github.io/mora-jai/](https://sdurrenmatt.github.io/mora-jai/)

## 🎮 Gameplay

Mora Jai revolves around a 3×3 puzzle grid where each tile has a color and triggers a specific effect when activated. The challenge is to understand the interactions and solve increasingly complex puzzles.

### How to Play

* **Click tiles** to activate their effects.  
* **Match** the four corner tiles to the target colors to open the box.
* Plan your moves carefully. Tiles can affect themselves and nearby tiles.  
* Solve the puzzle to unlock **seasonal rewards** and progress through levels.

## 🧩 Tile Moves

The tile moves are the same as those in *Blue Prince*:

| Color | Effect |
|------|--------|
| ![Gray](https://placehold.co/40x40/687278/687278.png) | Has no effect |
| ![White](https://placehold.co/40x40/f5faff/f5faff.png) | Turns gray, toggles adjacent tiles white/gray |
| ![Black](https://placehold.co/40x40/0f1217/0f1217.png) | Shifts the row to the right |
| ![Red](https://placehold.co/40x40/9b252d/9b252d.png) | Turns black tiles red and white tiles black |
| ![Pink](https://placehold.co/40x40/d486d8/d486d8.png) | Rotates adjacent and diagonal tiles |
| ![Orange](https://placehold.co/40x40/c47d2F/c47d2F.png) | Changes to the majority color among adjacent tiles |
| ![Yellow](https://placehold.co/40x40/b3b02f/b3b02f.png) | Moves upward |
| ![Green](https://placehold.co/40x40/1a9729/1a9729.png) | Swaps with the opposite tile |
| ![Blue](https://placehold.co/40x40/1c71c2/1c71c2.png) | Mimics the center tile |
| ![Violet](https://placehold.co/40x40/892597/892597.png) | Moves downward |

#### Tip

Understanding how certain tiles interact (like Blue and Red) can help you chain effects and solve puzzles faster.

## 🌸 Seasonal Rewards

Completing puzzles unlocks **season-themed illustrations**.

Players can collect up to 10 illustrations per season, totaling 40 unique rewards.

**Reward Examples:**

| Spring | Summer | Autumn | Winter |
|--------|--------|--------|--------|
| ![Hanami](/public/images/rewards/spring/hanami.png) | ![Hotaru](/public/images/rewards/summer/hotaru.png) | ![Tsukimi](/public/images/rewards/autumn/tsukimi.png) | ![Shinobi](/public/images/rewards/winter/shinobi.png) |

## 🛠️ Tech Stack

Mora Jai is developed with **React**, **TypeScript**, and **Vite** for fast and maintainable development.

To design the 40 levels, a mix of **Breadth-First Search (BFS)** algorithms and **manual selection** was used, ensuring each puzzle is **unique, challenging, and solvable** while demonstrating the game's mechanics.

## 📌 Licensing & Feedback

This project is **not open source**, but user feedback, bug reports, and suggestions are **warmly welcomed**.

Reach out via the project page or open an issue to share your thoughts!
