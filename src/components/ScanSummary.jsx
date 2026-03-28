import { useNavigate } from 'react-router-dom'

const scanData = [
  { label: 'Images', dups: '847 dups', width: '68%', color: 'bg-blue-500' },
  { label: 'Documents', dups: '241 dups', width: '30%', color: 'bg-red-500' },
  { label: 'Videos', dups: '94 dups', width: '15%', color: 'bg-green-500' },
  { label: 'Archives', dups: '65 dups', width: '10%', color: 'bg-amber-500' },
]

function ScanSummary() {
  const navigate = useNavigate()

  return (
    <div className="bg-white border border-gray-200 rounded-xl">

      {/* Card Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Last Scan Summary</h3>
          <p className="text-xs text-gray-400 mt-1">Scan #48 · /home/user/Documents</p>
        </div>
        <span className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
          Completed
        </span>
      </div>

      {/* Progress Bars */}
      <div className="p-5">
        {scanData.map((item, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex justify-between mb-1.5">
              <span className="text-xs font-medium text-gray-700">{item.label}</span>
              <span className="text-xs font-semibold text-blue-500">{item.dups}</span>
            </div>
            <div className="bg-gray-100 rounded-full h-2">
              <div
                className={`${item.color} h-2 rounded-full`}
                style={{ width: item.width }}
              ></div>
            </div>
          </div>
        ))}

        {/* Button */}
        <button
          onClick={() => navigate('/results')}
          className="mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-all"
        >
          View All Duplicates →
        </button>
      </div>

    </div>
  )
}

export default ScanSummary