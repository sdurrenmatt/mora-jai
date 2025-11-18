
import "./Menu.css"
import MenuItem from "./MenuItem"

type MenuProps = {
  onClick?: () => void
}

export default function Menu({ onClick }: MenuProps) {
  return (
    <nav className="menu">
      <ul className="menu__items">
        <MenuItem path="/" text="Play" onClick={onClick} />
        <MenuItem path="/gallery" text="Gallery" onClick={onClick} />
        <MenuItem path="/rules" text="Rules" onClick={onClick} />
        <MenuItem path="/credits" text="Credits" onClick={onClick} />
      </ul>
    </nav>
  )
}
