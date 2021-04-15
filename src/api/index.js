import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createTask = data => {
  const promise = httpClient.post('/tasks', data);
  return promise
};

export const getTasks = ({ offset = 0, limit = 10 } = {}) =>
  httpClient.get(`/tasks?${queryString.stringify({ limit, offset })}`);
