import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

// Axios instance banao
const API = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
})

// Har request mein token automatically lagao
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor — 401 pe logout karo
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Auth APIs
export const authAPI = {
  login: (email, password) =>
    API.post('/auth/login', { email, password }),

  logout: () =>
    API.post('/auth/logout'),

  me: () =>
    API.get('/auth/me'),
}

// Scan APIs
export const scanAPI = {
  startScan: (path, options) =>
    API.post('/scan', { path, ...options }),

  getResults: () =>
    API.get('/scan/results'),

  getStats: () =>
    API.get('/scan/stats'),

  getScanHistory: () =>
    API.get('/scan/history'),

  getProgress: () =>
    API.get('/scan/progress'),
}

// File APIs
export const fileAPI = {
  deleteFile: (filePath) =>
    API.delete('/file', { data: { path: filePath } }),

  deleteMultiple: (filePaths) =>
    API.delete('/files', { data: { paths: filePaths } }),

  moveToTrash: (filePath) =>
    API.post('/file/trash', { path: filePath }),
}

// Settings APIs
export const settingsAPI = {
  getSettings: () =>
    API.get('/settings'),

  saveSettings: (settings) =>
    API.post('/settings', settings),

  clearHistory: () =>
    API.delete('/settings/history'),

  resetSettings: () =>
    API.post('/settings/reset'),
}

export default API