import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // optional icons
import Button from "./Button";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 transition-colors duration-300">
      {/* Logo */}
      <Link
        to="/"
        className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 transition-colors"
      >
        TaskManager
      </Link>

      {/* Navigation + Theme Toggle */}
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 rounded transition-colors"
        >
          Home
        </Link>
        <Link
          to="/tasks"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 rounded transition-colors"
        >
          Tasks
        </Link>

        {/* Dark Mode Toggle */}
        <Button onClick={toggleTheme}>
          {theme === "light" ? (
            <>
              <Moon className="w-4 h-4 inline-block mr-2" /> Dark Mode
            </>
          ) : (
            <>
              <Sun className="w-4 h-4 inline-block mr-2 text-yellow-400" /> Light Mode
            </>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
