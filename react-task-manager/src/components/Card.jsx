import { useState, useEffect } from "react";

const Card = ({ task, onDelete, onToggleComplete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDesc, setEditDesc] = useState(task.description);
  const [saving, setSaving] = useState(false); // Show saving state

  // Keep local state in sync with task prop (live updates)
  useEffect(() => {
    setEditTitle(task.title);
    setEditDesc(task.description);
  }, [task]);

  const handleSave = async () => {
    if (!editTitle.trim()) return;

    if (onUpdate) {
      try {
        setSaving(true); // Disable buttons while saving
        await onUpdate(task._id, { title: editTitle, description: editDesc });
      } catch (err) {
        console.error("Failed to update task:", err.message);
      } finally {
        setSaving(false);
        setIsEditing(false);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4 flex flex-col gap-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Task Title"
          />
          <input
            type="text"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Task Description"
          />
          <div className="flex gap-2 mt-2">
            <button
              className={`px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600 ${saving ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save"}
            </button>
            <button
              className="px-2 py-1 rounded bg-gray-500 text-white hover:bg-gray-600"
              onClick={() => setIsEditing(false)}
              disabled={saving}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3
            className={`font-bold text-lg ${
              task.completed ? "line-through text-gray-400" : "text-black dark:text-white"
            }`}
          >
            {task.title || "Untitled Task"}
          </h3>
          <p
            className={
              task.completed ? "line-through text-gray-400" : "text-black dark:text-white"
            }
          >
            {task.description || "No description"}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <button
              className="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => onToggleComplete(task)}
            >
              {task.completed ? "Uncomplete" : "Complete"}
            </button>
            <button
              className="px-2 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            {/* ✅ Fixed delete button */}
            <button
              className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
              onClick={() => onDelete(task._id)} // ✅ send id instead of whole object
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
