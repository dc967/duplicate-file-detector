import { Loader2, CheckCircle } from 'lucide-react'

function ScanProgress({ progress, scanned, total, currentFile, isScanning }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {isScanning ? (
            <Loader2 size={18} className="text-blue-500 animate-spin" />
          ) : (
            <CheckCircle size={18} className="text-green-500" />
          )}
          <h3 className="text-sm font-semibold text-gray-800">
            {isScanning ? 'Scanning Files...' : 'Scan Complete!'}
          </h3>
        </div>
        <span className="text-sm font-bold text-blue-500">{progress}%</span>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-100 rounded-full h-2.5 mb-4">
        <div
          className={`h-2.5 rounded-full transition-all duration-500 ${
            progress === 100 ? 'bg-green-500' : 'bg-blue-500'
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-500">
          <span className="font-semibold text-gray-700">{scanned.toLocaleString()}</span>
          {' / '}
          <span className="font-semibold text-gray-700">{total.toLocaleString()}</span>
          {' files scanned'}
        </span>
        {progress === 100 && (
          <span className="text-xs font-medium text-green-500">
            ✓ Done!
          </span>
        )}
      </div>

      {/* Current File */}
      {isScanning && currentFile && (
        <div className="bg-gray-50 rounded-lg px-3 py-2">
          <p className="text-xs text-gray-400 mb-0.5">Currently scanning:</p>
          <p className="text-xs font-medium text-gray-600 truncate">{currentFile}</p>
        </div>
      )}

    </div>
  )
}

export default ScanProgress