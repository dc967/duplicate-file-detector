import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { LayoutDashboard, Upload, ScanSearch, Settings, Sun, Moon, LogOut } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const pageTitles = {
  '/': 'Dashboard',
  '/upload': 'Upload Files',
  '/results': 'Scan Results',
  '/settings': 'Settings',
}

function DefaultLayout() {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'Dashboard'
  const { darkMode, toggleTheme } = useTheme()
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <aside className="w-64 bg-[#1c2434] flex flex-col fixed h-full">

        {/* Logo */}
        <div className="px-6 py-5 border-b border-white/10">
          <h1 className="text-white font-bold text-lg">DupliScan</h1>
          <p className="text-gray-400 text-xs">Duplicate File Detector</p>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-4 space-y-1">

          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
            Main
          </p>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all
              ${isActive ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/upload"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all
              ${isActive ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`
            }
          >
            <Upload size={18} />
            Upload Files
          </NavLink>

          <NavLink
            to="/results"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all
              ${isActive ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`
            }
          >
            <ScanSearch size={18} />
            Scan Results
          </NavLink>

          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mt-4 mb-2">
            System
          </p>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all
              ${isActive ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>

        </nav>

        {/* Sidebar Footer — Logout */}
        <div className="px-4 py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full hover:bg-white/10 px-2 py-2 rounded-lg transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              AD
            </div>
            <div className="text-left flex-1">
              <p className="text-white text-sm font-medium">Admin</p>
              <p className="text-red-400 text-xs">Click to Logout</p>
            </div>
            <LogOut size={16} className="text-red-400" />
          </button>
        </div>

      </aside>

      {/* Right Side */}
      <div className="flex-1 flex flex-col ml-64">

        {/* Topbar */}
        <header className="h-14 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 sticky top-0 z-10">
          <h2 className="text-gray-800 dark:text-white font-semibold text-base">{title}</h2>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            {darkMode
              ? <Sun size={18} className="text-amber-400" />
              : <Moon size={18} className="text-gray-500" />
            }
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default DefaultLayout