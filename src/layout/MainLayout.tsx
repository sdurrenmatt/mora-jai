import { useMeasure } from "@uidotdev/usehooks"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import PuzzleBackground from "../components/PuzzleBackground/PuzzleBackground"
import PuzzleSidebar from "../components/PuzzleSidebar/PuzzleSidebar"
import "./MainLayout.css"

const LG_BREAKPOINT = 1024

export default function MainLayout() {
    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
    const [ref, { width }] = useMeasure()
    const isSidebarOverlay = (width ?? 0) < LG_BREAKPOINT;

    useEffect(() => {
        if (!isSidebarOverlay) setSidebarOpen(true)
    }, [isSidebarOverlay])

    return (
        <PuzzleBackground>
            <div
                ref={ref}
                className="main-layout"
            >
                <aside
                    className={clsx(
                        "main-layout__sidebar",
                        {
                            "main-layout__sidebar--overlay": isSidebarOverlay,
                            "main-layout__sidebar--closed": !isSidebarOpen
                        }
                    )}>
                    <PuzzleSidebar onClick={isSidebarOverlay ? toggleSidebar : undefined} />
                </aside>

                <main className="main-layout__content">
                    <Outlet />
                </main>

                {isSidebarOverlay && (
                    <button
                        className="main-layout__toggle-button"
                        onClick={() => toggleSidebar()}
                    >
                        ☰
                    </button>
                )}
            </div>
        </PuzzleBackground>
    )
}
