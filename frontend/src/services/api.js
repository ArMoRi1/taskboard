const API_URL = 'http://127.0.0.1:8000/api';

// Налаштування fetch з credentials для сесій
const fetchWithCredentials = (url, options = {}) => {
  return fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

// Auth
export const login = async (email, password) => {
  const response = await fetchWithCredentials(`${API_URL}/login/`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const register = async (username, email, password) => {
  const response = await fetchWithCredentials(`${API_URL}/register/`, {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
  });
  return response.json();
};

export const logout = async () => {
  const response = await fetchWithCredentials(`${API_URL}/logout/`, {
    method: 'POST',
  });
  return response.json();
};

export const getCurrentUser = async () => {
  const response = await fetchWithCredentials(`${API_URL}/current-user/`);
  return response.json();
};

// Tasks
export const getTasks = async () => {
  const response = await fetchWithCredentials(`${API_URL}/tasks/`);
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetchWithCredentials(`${API_URL}/tasks/`, {
    method: 'POST',
    body: JSON.stringify(task),
  });
  return response.json();
};

export const updateTask = async (id, task) => {
  const response = await fetchWithCredentials(`${API_URL}/tasks/${id}/`, {
    method: 'PUT',
    body: JSON.stringify(task),
  });
  return response.json();
};

export const deleteTask = async (id) => {
  await fetchWithCredentials(`${API_URL}/tasks/${id}/`, {
    method: 'DELETE',
  });
};

// Categories
export const getCategories = async () => {
  const response = await fetchWithCredentials(`${API_URL}/categories/`);
  return response.json();
};

export const createCategory = async (category) => {
  const response = await fetchWithCredentials(`${API_URL}/categories/`, {
    method: 'POST',
    body: JSON.stringify(category),
  });
  return response.json();
};

// Statuses
export const getStatuses = async () => {
  const response = await fetchWithCredentials(`${API_URL}/statuses/`);
  return response.json();
};

export const createStatus = async (status) => {
  const response = await fetchWithCredentials(`${API_URL}/statuses/`, {
    method: 'POST',
    body: JSON.stringify(status),
  });
  return response.json();
};