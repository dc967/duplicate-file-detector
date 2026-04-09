import FileUploader from '../components/FileUploader'
import { useState } from 'react'
import ScanProgress from '../components/ScanProgress'

function UploadFile() {
  const [path, setPath] = useState('')
  const [recursive, setRecursive] = useState(true)
  const [skipSystem, setSkipSystem] = useState(true)
  const [isScanning, setIsScanning] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFileSelect = (files) => {
    console.log('Files selected:', files)
  }

  const handleScan =() => {
    setIsScanning(true)
  }

  return (
    <div className="grid grid-cols-2 gap-4">

      {/* Left Side */}
      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="p-5 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-800">Upload Files or Folder</h3>
        </div>
        <div className="p-5">
          <FileUploader onFileSelect={handleFileSelect} />

          {/* Directory Path */}
          <div className="mt-4">
            <label className="text-xs font-medium text-gray-600 mb-1 block">
              Or enter directory path
            </label>
            <input
              type="text"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="/home/user/Documents"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
            />
          </div>

          {/* Scan Button */}
          <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-all">
            Start Scan
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="p-5 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-800">Scan Options</h3>
        </div>
        <div className="p-5">

          {/* Hash Method */}
          <div className="mb-4">
            <label className="text-xs font-medium text-gray-600 mb-1 block">
              Hash Method
            </label>
            <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400">
              <option>MD5 (Fast)</option>
              <option selected>SHA-256 (Recommended)</option>
              <option>SHA-512 (Secure)</option>
            </select>
          </div>

          {/* Recursive Toggle */}
          <div className="flex items-center justify-between py-3 border-b border-gray-50">
            <div>
              <p className="text-sm font-medium text-gray-700">Recursive Scan</p>
              <p className="text-xs text-gray-400 mt-0.5">Scan all subdirectories</p>
            </div>
            <button
              onClick={() => setRecursive(!recursive)}
              className={`w-10 h-5 rounded-full transition-all relative ${recursive ? 'bg-blue-500' : 'bg-gray-200'}`}
            >
              <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${recursive ? 'left-5' : 'left-0.5'}`}></span>
            </button>
          </div>

          {/* Skip System Files Toggle */}
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-gray-700">Skip System Files</p>
              <p className="text-xs text-gray-400 mt-0.5">Exclude OS critical files</p>
            </div>
            <button
              onClick={() => setSkipSystem(!skipSystem)}
              className={`w-10 h-5 rounded-full transition-all relative ${skipSystem ? 'bg-blue-500' : 'bg-gray-200'}`}
            >
              <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${skipSystem ? 'left-5' : 'left-0.5'}`}></span>
            </button>
          </div>

        </div>
      </div>


     {/* ScanProgress — Start Scan ke baad dikhega */}
      {isScanning && (
        <div className="col-span-2">
          <ScanProgress
            progress={65}
            scanned={8432}
            total={12842}
            currentFile="vacation_photo.jpg"
            isScanning={isScanning}
          />
        </div>
      )}









    </div>
  )
}

export default UploadFile