import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import DefaultLayout from './layouts/DefaultLayout'
import Dashboard from './pages/Dashboard'
import UploadFile from './pages/UploadFile'
import ScanResults from './pages/ScanResults'
import Settings from './pages/Settings'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <Routes>
      {/* Public Route */}
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" /> : <Login />}
      />

      {/* Private Routes */}
      <Route
        element={
          <PrivateRoute>
            <DefaultLayout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/results" element={<ScanResults />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App