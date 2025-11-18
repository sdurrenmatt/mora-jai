import Logo from "./Logo"
import Menu from "./Menu"
import "./Sidebar.css"

type SidebarProps = {
  onClick?: () => void
}

export default function Sidebar({ onClick }: SidebarProps) {
  return (
    <div className="sidebar">
      <Logo />
      <Menu onClick={onClick} />
    </div>
  )
}