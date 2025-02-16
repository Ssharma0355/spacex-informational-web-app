import {useState} from "react";
import { Link } from "react-router-dom";
import { SiSpacex } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";

function Header({ setIsAuthenticated }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <button
          className="text-white text-2xl lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className="hidden lg:flex">
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
              <Link to="/crew" className="text-white text-sm lg:text-base">
                Crew
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
        {isMenuOpen && (
          <nav className="absolute top-20 right-5 bg-black p-5 rounded-lg shadow-lg w-40 lg:hidden z-10">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/capsule"
                  className="text-white text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Capsule
                </Link>
              </li>
              <li>
                <Link
                  to="/cores"
                  className="text-white text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cores
                </Link>
              </li>
              <li>
                <Link
                  to="/crew"
                  className="text-white text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Crew
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="text-white text-sm bg-red-600 px-4 py-2 rounded hover:bg-red-700 w-full"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
