import "./Logo.css"

export default function Logo() {
  return (
    <img
      className="logo"
      src={`${import.meta.env.BASE_URL}/images/logo.png`}
      alt="Mora Jai"
    />
  )
}
