import { useState } from "react";
import { Outlet } from "react-router";
import PuzzleBackground from "../components/PuzzleBackground/PuzzleBackground";
import PuzzleSidebar from "../components/PuzzleSidebar/PuzzleSidebar";
import "./MainLayout.css";

export default function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <PuzzleBackground>
            <div className="main-layout">
                {sidebarOpen &&
                    <div className="main-layout__sidebar">
                        <PuzzleSidebar />
                    </div>
                }
                {!sidebarOpen &&
                    <div className="main-layout__content">
                        <Outlet />
                    </div>
                }
                <button
                    className="main-layout__toggle-button"
                    onClick={() => toggleSidebar()}
                >
                    ☰
                </button>
            </div>
        </PuzzleBackground>
    )
}
