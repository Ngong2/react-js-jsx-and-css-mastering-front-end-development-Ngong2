import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { getTasks, createTask, updateTask, deleteTask } from "../lib/api";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        console.error("Error loading tasks:", err);
      }
    };
    loadTasks();
  }, []);

  const handleAddTask = async () => {
    if (!title.trim()) return alert("Title is required");
    try {
      const newTask = await createTask({ title, description });
      setTasks([newTask, ...tasks]);
      setTitle("");
      setDescription("");
    } catch {
      alert("Failed to create task");
    }
  };

  const handleToggleComplete = async (id) => {
    try {
      const task = tasks.find((t) => t._id === id);
      const updated = await updateTask(id, { completed: !task.completed });
      setTasks(tasks.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      console.error("Error toggling complete:", err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const handleUpdateTask = async (id, updatedFields) => {
    try {
      const updated = await updateTask(id, updatedFields);
      setTasks(tasks.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">
        📘 Task Manager
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center text-sm sm:text-base">
        {tasks.length > 0
          ? `${completed} of ${tasks.length} tasks completed`
          : "No tasks yet — start by adding one!"}
      </p>

      <div className="mb-8 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg transition hover:shadow-2xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Add New Task
        </h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Task title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Description"
          rows="3"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition shadow-md w-full sm:w-auto"
        >
          Add Task
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">No tasks found</p>
        ) : (
          tasks.map((task) => (
            <Card
              key={task._id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager;
