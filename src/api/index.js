import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createTask = ({ task }) => httpClient.post('/tasks', task);

export const getTasks = ({ offset = 0, limit = 10 } = {}) =>
  httpClient.get(`/tasks?${queryString.stringify({ limit, offset })}`);

export const updateTask = ({ id, values }) =>
  httpClient.patch(`/tasks/${id}`, values);

export const deleteTask = ({ id }) => httpClient.delete(`/tasks/${id}`);

export const deleteTasks = () => httpClient.delete(`/tasks`);
