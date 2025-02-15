import React from "react";
import { Link } from "react-router-dom";
import { SiSpacex } from "react-icons/si";

function Header() {
  return (
    <>
      <header className="absolute flex items-center justify-between p-5 w-full">
        <div>
          <Link to="/">
            <SiSpacex className="text-8xl text-white" />
          </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/capsule" className="text-white text-sm lg:text-base">Capsule</Link>
                </li>
                <li>
                    {/* <Link></Link> */}
                </li>
            </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
