import { Link } from "react-router-dom";
import logo from '../assets/plinko.jpg';

export const Navbar = () => {
    return (
      <nav className="z-50 border-gray-200 dark:bg-[#262522] borbder-b shadow-lg">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img className="navBarImg" src={logo} />
          </Link>
        </div>
      </nav>
    );
  };