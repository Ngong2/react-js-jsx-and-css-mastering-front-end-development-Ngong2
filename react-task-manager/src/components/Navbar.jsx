import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex flex-wrap justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
        TaskManager
      </Link>

      <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 rounded">
          Home
        </Link>
        <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 rounded">
          Tasks
        </Link>
        <Button onClick={toggleTheme}>
          {theme === "light" ? (
            <>
              <Moon className="w-4 h-4 inline-block mr-1" /> Dark Mode
            </>
          ) : (
            <>
              <Sun className="w-4 h-4 inline-block mr-1 text-yellow-400" /> Light Mode
            </>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
