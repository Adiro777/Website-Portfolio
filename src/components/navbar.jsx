import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    pathname === path
      ? "relative text-gray-900 font-semibold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full"
      : "text-gray-600 hover:text-gray-900 transition-colors duration-200";

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center z-50 px-4 sm:px-6">
      <div className="w-full max-w-2xl mx-auto mt-4 sm:mt-6 bg-white/90 backdrop-blur-md shadow-lg 
                      border border-gray-100 py-3 sm:py-5 px-4 sm:px-8 rounded-2xl 
                      flex justify-center items-center gap-4 sm:gap-8 md:gap-12">
        
        <Link className={`${linkClass("/")} text-sm sm:text-base md:text-lg font-medium pb-2`} to="/">
          Home
        </Link>

        <Link className={`${linkClass("/about")} text-sm sm:text-base md:text-lg font-medium pb-2`} to="/about">
          About
        </Link>

        <Link className={`${linkClass("/projects")} text-sm sm:text-base md:text-lg font-medium pb-2`} to="/projects">
          Projects
        </Link>

        <Link className={`${linkClass("/resume")} text-sm sm:text-base md:text-lg font-medium pb-2`} to="/resume">
          Resume
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;