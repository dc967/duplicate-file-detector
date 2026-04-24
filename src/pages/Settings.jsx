
import { useState } from 'react'
import { Trash2, Plus } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

function Settings() {
  
  const [moveToTrash, setMoveToTrash] = useState(true)
  const [autoScan, setAutoScan] = useState(false)
  const [emailNotif, setEmailNotif] = useState(false)

  
  const [hashMethod, setHashMethod] = useState('sha256')
  const [recursive, setRecursive] = useState(true)
  const [skipSystem, setSkipSystem] = useState(true)
  const [minFileSize, setMinFileSize] = useState('1 KB')
  const { darkMode, toggleTheme } = useTheme()
  
  const [excludedPaths, setExcludedPaths] = useState([
    '/System/Library',
    '/usr/local/bin',
    '/node_modules/**',
  ])

  const [newPath, setNewPath] = useState('')

  const removePath = (index) => {
    setExcludedPaths(excludedPaths.filter((_, i) => i !== index))
  }

  const addPath = () => {
    if (newPath.trim() !== '') {
      setExcludedPaths([...excludedPaths, newPath.trim()])
      setNewPath('')
    }
  }


  const Toggle = ({ value, onChange }) => (
    <button
      onClick={() => onChange(!value)}
      className={`w-10 h-5 rounded-full transition-all relative flex-shrink-0 ${value ? 'bg-blue-500' : 'bg-gray-200'}`}
    >
      <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${value ? 'left-5' : 'left-0.5'}`}></span>
    </button>
  )


  const SettingRow = ({ title, desc, value, onChange, border = true }) => (
    <div className={`flex items-center justify-between py-3 ${border ? 'border-b border-gray-50' : ''}`}>
      <div>
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
      </div>
      <Toggle value={value} onChange={onChange} />
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      
      <div className="flex flex-col gap-4">

        
        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="p-5 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-800">General Settings</h3>
            <p className="text-xs text-gray-400 mt-1">Configure app behaviour</p>
          </div>
          <div className="p-5">
            <SettingRow title="Dark Mode" desc="Toggle dark theme" value={darkMode} onChange={toggleTheme} />
            <SettingRow title="Move to Trash" desc="Safer deletion mode" value={moveToTrash} onChange={setMoveToTrash} />
            <SettingRow title="Auto Scan on Startup" desc="Run scan when app launches" value={autoScan} onChange={setAutoScan} />
            <SettingRow title="Email Notifications" desc="Notify when scan completes" value={emailNotif} onChange={setEmailNotif} border={false} />
          </div>
        </div>

        
        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="p-5 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-800">Scan Settings</h3>
            <p className="text-xs text-gray-400 mt-1">Configure scan behaviour</p>
          </div>
          <div className="p-5">


            <div className="mb-4">
              <label className="text-xs font-medium text-gray-600 mb-1 block">Hash Algorithm</label>
              <select
                value={hashMethod}
                onChange={(e) => setHashMethod(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
              >
                <option value="md5">MD5 (Fastest)</option>
                <option value="sha256">SHA-256 (Recommended)</option>
                <option value="sha512">SHA-512 (Most Secure)</option>
              </select>
            </div>

        
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-600 mb-1 block">Minimum File Size</label>
              <input
                type="text"
                value={minFileSize}
                onChange={(e) => setMinFileSize(e.target.value)}
                placeholder="e.g. 1 KB"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
              />
            </div>

            <SettingRow title="Recursive Scan" desc="Scan all subdirectories" value={recursive} onChange={setRecursive} />
            <SettingRow title="Skip System Files" desc="Exclude OS critical files" value={skipSystem} onChange={setSkipSystem} border={false} />

          </div>
        </div>

      </div>

      
      <div className="flex flex-col gap-4">

        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="p-5 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-800">Excluded Paths</h3>
            <p className="text-xs text-gray-400 mt-1">These paths won't be scanned</p>
          </div>
          <div className="p-5">

            
            {excludedPaths.map((path, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 mb-2">
                <span className="text-xs text-gray-600 flex-1">{path}</span>
                <button onClick={() => removePath(index)} className="text-red-400 hover:text-red-600 transition-all">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}

            
            <div className="flex gap-2 mt-3">
              <input
                type="text"
                value={newPath}
                onChange={(e) => setNewPath(e.target.value)}
                placeholder="/path/to/exclude"
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400"
              />
              <button
                onClick={addPath}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-all"
              >
                <Plus size={14} />
              </button>
            </div>

          </div>
        </div>

        
        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="p-5 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-red-500">Danger Zone</h3>
            <p className="text-xs text-gray-400 mt-1">These actions cannot be undone</p>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <button className="w-full bg-red-50 hover:bg-red-100 text-red-500 text-sm font-medium py-2.5 rounded-lg transition-all">
              Clear All Scan History
            </button>
            <button className="w-full bg-red-50 hover:bg-red-100 text-red-500 text-sm font-medium py-2.5 rounded-lg transition-all">
              Reset All Settings
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Settings