import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { LayoutDashboard, Upload, ScanSearch, Settings } from 'lucide-react'

const pageTitles = {
  '/': 'Dashboard',
  '/upload': 'Upload Files',
  '/results': 'Scan Results',
  '/settings': 'Settings',
}

function DefaultLayout() {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'Dashboard'

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <aside className="w-64 bg-[#1c2434] flex flex-col fixed h-full">
        <div className="px-6 py-5 border-b border-white/10">
          <h1 className="text-white font-bold text-lg">DupliScan</h1>
          <p className="text-gray-400 text-xs">Duplicate File Detector</p>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}>
            <LayoutDashboard size={18} />Dashboard
          </NavLink>
          <NavLink to="/upload" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}>
            <Upload size={18} />Upload Files
          </NavLink>
          <NavLink to="/results" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}>
            <ScanSearch size={18} />Scan Results
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}>
            <Settings size={18} />Settings
          </NavLink>
        </nav>

        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">AD</div>
            <div>
              <p className="text-white text-sm font-medium">Admin</p>
              <p className="text-gray-400 text-xs">System User</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Side */}
      <div className="flex-1 flex flex-col ml-64">
        <header className="h-14 bg-white border-b border-gray-200 flex items-center px-6 sticky top-0 z-10">
          <h2 className="text-gray-800 font-semibold text-base">{title}</h2>
        </header>
        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default DefaultLayout