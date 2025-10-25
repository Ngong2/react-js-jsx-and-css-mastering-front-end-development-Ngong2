import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        // Using the correct API endpoint for your CRUD backend
        const response = await axios.get('http://localhost:5000/api/tasks');
        
        console.log('Tasks fetched:', response.data);
        
        // Check if response.data is an array or if it has a data property
        const tasksData = Array.isArray(response.data) ? response.data : 
                         (response.data.data ? response.data.data : []);
        
        setTasks(tasksData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching tasks:', err);
        setError('Failed to fetch tasks. Please try again later.');
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Add this to debug what's in the tasks state
  useEffect(() => {
    console.log('Current tasks state:', tasks);
  }, [tasks]);

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (tasks.length === 0) return <div>No tasks found. Add a new task to get started!</div>;

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.map((task) => (
        <Task key={task._id || task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;