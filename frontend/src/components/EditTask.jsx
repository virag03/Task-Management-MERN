import React, { useState, useEffect } from 'react';
import { fetchTasks, updateTask } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({ title: '', description: '', status: 'Pending' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getTask = async () => {
      try {
        const { data } = await fetchTasks();
        const foundTask = data.find(t => t._id === id);
        if (foundTask) setTask(foundTask);
      } finally {
        setLoading(false);
      }
    };
    getTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(id, task);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={(e) => setTask({...task, title: e.target.value})}
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={(e) => setTask({...task, description: e.target.value})}
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={task.status}
            onChange={(e) => setTask({...task, status: e.target.value})}
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;