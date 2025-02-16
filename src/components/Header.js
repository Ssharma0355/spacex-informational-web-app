import React from "react";
import { Link } from "react-router-dom";
import { SiSpacex } from "react-icons/si";

function Header({ setIsAuthenticated }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <>
      <header className="absolute flex items-center justify-between p-5 w-full">
        <div>
          <Link to="/">
            <SiSpacex className="text-8xl text-white" />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/capsule" className="text-white text-sm lg:text-base">
                Capsule
              </Link>
            </li>
            <li>
              <Link to="/cores" className="text-white text-sm lg:text-base">
                Cores
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-white text-sm lg:text-base bg-black-600 px-4 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
