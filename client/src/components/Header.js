import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <>
      <header>
        <nav className={`nav page-padding`}>
          <div className="menu">
            <img src="./img/menu_black_24dp.svg" alt="menu" />
          </div>
          <ul className="rightLinks">
            <li className="rightLinkItems">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `link activeLink` : `link`
                }
              >
                Products
              </NavLink>
            </li>
            <li className="rightLinkItems">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? `link activeLink` : `link`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className={`navButton rightLinkItems`}>
              <LoginButton />
            </li>
          </ul>
        </nav>
      </header>
      <header className={`header main-layout section-padding`}>
        <h1 className="logo">Cat Couture</h1>
      </header>
    </>
  );
};

export default Header;
