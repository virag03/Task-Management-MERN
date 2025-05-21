import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/tasks',
});

export const fetchTasks = () => API.get('/');
export const createTask = (newTask) => API.post('/', newTask);
export const updateTask = (id, updatedTask) => API.put(`/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/${id}`);