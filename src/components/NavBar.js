import logo from "../img/logo.png";

export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt="Logo AirBnd" className="nav__logo" />
    </nav>
  )
}