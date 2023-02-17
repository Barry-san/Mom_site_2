import { Link } from "react-router-dom";

function Menu() {
  return (
    <div
      className="menu flex bg-red-200 w-full flex-col h-screen
 absoulte top-0 left-0 justify-center "
    >
      <Link to={"/About"}>
        <div className="menu-card border-t">
          <p className="text-5xl ">About</p>
        </div>
      </Link>

      <Link to={"/founder"}>
        <div className="menu-card">
          <p className="text-5xl">Founder</p>
        </div>
      </Link>

      <Link to={"/prices"}>
        <div className="menu-card">
          <p className="text-5xl">Prices</p>
        </div>
      </Link>

      <Link to={"/address"}>
        <div className="menu-card">
          <p className="text-5xl">Address</p>
        </div>
      </Link>
    </div>
  );
}

export default Menu;
