

import { Trash2 } from 'lucide-react'
import { useState } from 'react'

const extColors = {
  JPG: 'bg-blue-50 text-blue-500',
  PNG: 'bg-blue-50 text-blue-500',
  PDF: 'bg-green-50 text-green-600',
  MP4: 'bg-purple-50 text-purple-500',
  AVI: 'bg-purple-50 text-purple-500',
  ZIP: 'bg-amber-50 text-amber-500',
  RAR: 'bg-amber-50 text-amber-500',
  DOCX: 'bg-green-50 text-green-600',
}

const copiesColors = {
  2: 'bg-amber-50 text-amber-600',
  3: 'bg-red-50 text-red-500',
  4: 'bg-red-50 text-red-500',
  5: 'bg-red-50 text-red-500',
}

function DuplicateTable({ data }) {
  const [selected, setSelected] = useState([])

  // Single checkbox toggle
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  // Select all toggle
  const toggleSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([])
    } else {
      setSelected(data.map((item) => item.id))
    }
  }

  // Delete single
  const handleDelete = (id) => {
    console.log('Delete file:', id)
  }

  // Delete selected
  const handleDeleteSelected = () => {
    console.log('Delete selected:', selected)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl">

      {/* Table Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Duplicate Files</h3>
          <p className="text-xs text-gray-400 mt-1">{data.length} duplicates found</p>
        </div>
        {selected.length > 0 && (
          <button
            onClick={handleDeleteSelected}
            className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-500 text-xs font-semibold px-4 py-2 rounded-lg transition-all"
          >
            <Trash2 size={14} />
            Delete Selected ({selected.length})
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">

          {/* Table Head */}
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-5 py-3 text-left">
                <input
                  type="checkbox"
                  onChange={toggleSelectAll}
                  checked={selected.length === data.length && data.length > 0}
                  className="cursor-pointer"
                />
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">File Name</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">Size</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">Copies</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">Hash</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wide">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-50 hover:bg-gray-50 transition-all"
              >
                {/* Checkbox */}
                <td className="px-5 py-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="cursor-pointer"
                  />
                </td>

                {/* File Name */}
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${extColors[item.ext] || 'bg-gray-50 text-gray-500'}`}>
                      {item.ext}
                    </span>
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 ml-10">{item.path}</p>
                </td>

                {/* Size */}
                <td className="px-5 py-3 text-sm text-gray-500">{item.size}</td>

                {/* Copies */}
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${copiesColors[item.copies] || 'bg-gray-50 text-gray-500'}`}>
                    {item.copies} copies
                  </span>
                </td>

                {/* Hash */}
                <td className="px-5 py-3 text-xs text-gray-400 font-mono">{item.hash}</td>

                {/* Action */}
                <td className="px-5 py-3">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-red-500 border border-gray-200 hover:border-red-200 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-all"
                  >
                    <Trash2 size={12} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default DuplicateTable