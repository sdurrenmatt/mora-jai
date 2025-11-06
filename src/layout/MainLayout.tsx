import { Outlet } from "react-router"
import PuzzleBackground from "../components/PuzzleBackground/PuzzleBackground"
import PuzzleMenu from "../components/PuzzleMenu/PuzzleMenu"
import "./MainLayout.css"

export default function MainLayout() {
    return (
        <PuzzleBackground>
            <div className="main-layout">
                <div className="main-layout__sidebar">
                    <PuzzleMenu />
                </div>
                <div className="main-layout__content">
                    <Outlet />
                </div>
            </div>
        </PuzzleBackground>
    )
}
