import { Outlet } from "react-router"
import PuzzleBackground from "../components/PuzzleBackground/PuzzleBackground"
import PuzzleMenu from "../components/PuzzleMenu/PuzzleMenu"
import PuzzleTitle from "../components/PuzzleTitle/PuzzleTitle"
import "./MainLayout.css"

export default function MainLayout() {
    return (
        <PuzzleBackground>
            <div className="main-layout">
                <div className="main-layout__sidebar">
                    <PuzzleTitle />
                    <PuzzleMenu />
                </div>
                <div className="main-layout__content">
                    <Outlet />
                </div>
            </div>
        </PuzzleBackground>
    )
}
