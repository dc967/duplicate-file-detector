import React from 'react'
import { File, Copy, HardDrive, Clock } from 'lucide-react'

const stats = [
  {
    icon: <File size={20} />,
    value: '12,842',
    label: 'Total Files Scanned',
    subText: '↑ 2,341 this week',
    subColor: 'text-green-500',
    iconBg: 'bg-blue-50 text-blue-500',
  },
  {
    icon: <Copy size={20} />,
    value: '1,247',
    label: 'Duplicates Found',
    subText: '↑ 87 new today',
    subColor: 'text-red-500',
    iconBg: 'bg-red-50 text-red-500',
  },
  {
    icon: <HardDrive size={20} />,
    value: '4.7 GB',
    label: 'Space Recoverable',
    subText: '↑ 12.3% of total',
    subColor: 'text-green-500',
    iconBg: 'bg-green-50 text-green-500',
  },
  {
    icon: <Clock size={20} />,
    value: '3m 42s',
    label: 'Last Scan Duration',
    subText: 'Completed 2h ago',
    subColor: 'text-gray-400',
    iconBg: 'bg-amber-50 text-amber-500',
  },
]

function StatCard({ icon, value, label, subText, subColor, iconBg }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
      {/* Icon */}
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        {icon}
      </div>
      {/* Content */}
      <div>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-xs text-gray-500 font-medium mt-0.5">{label}</p>
        <p className={`text-xs font-medium mt-1 ${subColor}`}>{subText}</p>
      </div>
    </div>
  )
}

function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}

export default StatsCards