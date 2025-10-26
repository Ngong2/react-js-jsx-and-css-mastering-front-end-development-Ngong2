import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import { getTasks } from "../lib/api";

const Home = () => {
  const [taskStats, setTaskStats] = useState({ total: 0, completed: 0 });

  useEffect(() => {
    const loadTaskStats = async () => {
      try {
        const tasks = await getTasks();
        const completed = tasks.filter((t) => t.completed).length;
        setTaskStats({ total: tasks.length, completed });
      } catch (error) {
        console.error("Error loading task stats:", error);
      }
    };
    loadTaskStats();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white">
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-600 dark:text-blue-400">
            Task Manager
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            Organize your tasks efficiently with a MongoDB-powered system.
          </p>

          {taskStats.total > 0 && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
              <p>{taskStats.completed} / {taskStats.total} tasks completed</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(taskStats.completed / taskStats.total) * 100}%` }}
                />
              </div>
            </div>
          )}

          <Link to="/tasks">
            <Button className="px-8 py-4 rounded-lg shadow-md">
              Get Started with Tasks
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
