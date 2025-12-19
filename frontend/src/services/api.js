const API_URL = 'http://localhost:8000/api';

// Функція для отримання CSRF токену з cookies
const getCsrfToken = () => {
  const name = 'csrftoken';
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

const fetchWithCredentials = (url, options = {}) => {
  const csrfToken = getCsrfToken();
  
  return fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(csrfToken && { 'X-CSRFToken': csrfToken }),
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
  try {
    const response = await fetchWithCredentials(`${API_URL}/current-user/`);
    
    if (!response.ok) {
      return { error: 'Not authenticated' };
    }
    
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
};

// Tasks
export const getTasks = async () => {
  try {
    const response = await fetchWithCredentials(`${API_URL}/tasks/`);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    return [];
  }
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
  try {
    const response = await fetchWithCredentials(`${API_URL}/categories/`);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    return [];
  }
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
  try {
    const response = await fetchWithCredentials(`${API_URL}/statuses/`);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    return [];
  }
};

export const createStatus = async (status) => {
  const response = await fetchWithCredentials(`${API_URL}/statuses/`, {
    method: 'POST',
    body: JSON.stringify(status),
  });
  return response.json();
};