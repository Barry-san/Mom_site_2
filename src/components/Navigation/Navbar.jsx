import { handleMenu, handleClose } from "../../api/hamburger";
import Menu from "./Menu";
import hamburger from "../../../public/menu_FILL0_wght400_GRAD0_opsz48.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="navbar flex justify-between items-center sticky top-0
       w-full px-4 bg-white bg-opacity-10 backdrop-blur-md"
      onBlur={handleClose}
    >
      <Link to={"/"}>
        <p className="text-blue-400 md:text-3xl text-2xl font-bold p-4 text-center font-Rubik">
          G . I . A
        </p>
      </Link>
      <button className="z-10" onClick={() => handleMenu()}>
        <span className="sr-only"> menu </span>
        <img src={hamburger} alt="menu-toggle" />
      </button>
      <Menu />
    </div>
  );
}

export default Navbar;
