import React, { useState, useEffect } from 'react';
import { fetchTasks, deleteTask } from '../services/api';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await fetchTasks();
        setTasks(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Tasks</h2>
        <button 
          onClick={() => navigate('/add')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No tasks found</div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map(task => (
            <div key={task._id} className="bg-white p-4 rounded shadow">
              <h3 className="font-medium text-lg">{task.title}</h3>
              <p className="text-gray-600 my-2">{task.description}</p>
              <div className={`inline-block px-2 py-1 rounded text-xs ${
                task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {task.status}
              </div>
              <div className="flex justify-between mt-4">
                <button 
                  onClick={() => navigate(`/edit/${task._id}`)}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(task._id)}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;