import { Outlet, NavLink } from 'react-router-dom'
import { LayoutDashboard, Upload, ScanSearch, Settings } from 'lucide-react'

function DefaultLayout() {
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

        {/* User Info */}
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
              AD
            </div>
            <div>
              <p className="text-white text-sm font-medium">Admin</p>
              <p className="text-gray-400 text-xs">System User</p>
            </div>
          </div>
        </div>

      </aside>

      {/* Right Side */}
      <div className="flex-1 flex flex-col ml-64">

        {/* Topbar */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center px-6 sticky top-0 z-10">
          <h2 className="text-gray-800 font-semibold text-base">Dashboard</h2>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default DefaultLayout