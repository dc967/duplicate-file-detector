
import DuplicateTable from "../components/DuplicateTable";
import { useState } from "react";

const allData = [
  { id: 1, name: 'vacation_photo.jpg', ext: 'JPG', size: '3.2 MB', copies: 4, hash: 'a1b2c3...', path: '/Documents/Photos', type: 'image' },
  { id: 2, name: 'project_report.pdf', ext: 'PDF', size: '1.8 MB', copies: 2, hash: 'e5f6g7...', path: '/Downloads', type: 'document' },
  { id: 3, name: 'birthday_clip.mp4', ext: 'MP4', size: '142 MB', copies: 2, hash: 'i9j0k1...', path: '/Videos', type: 'video' },
  { id: 4, name: 'screenshot.png', ext: 'PNG', size: '876 KB', copies: 3, hash: 'm3n4o5...', path: '/Desktop', type: 'image' },
  { id: 5, name: 'resume_final.docx', ext: 'DOCX', size: '244 KB', copies: 2, hash: 'q7r8s9...', path: '/Documents', type: 'document' },
  { id: 6, name: 'backup.zip', ext: 'ZIP', size: '892 MB', copies: 2, hash: 'u1v2w3...', path: '/Projects', type: 'archive' },
]


const tabs = [
  { label: 'All', value: 'all', count: 6 },
  { label: 'Images', value: 'image', count: 2 },
  { label: 'Docs', value: 'document', count: 2 },
  { label: 'Videos', value: 'video', count: 1 },
  { label: 'Archives', value: 'archive', count: 1 },
]


function ScanResult(){
   const [active, setActiveTab] = useState('all')


   const filteredData = active === 'all'
    ? allData
    : allData.filter((item) => item.type === active)






    return (
        <div>
   <div className="flex gap-2 mb-4">
     {tabs.map((tab) =>(
       <button
         key={tab.value}
         onClick={() => setActiveTab(tab.value)}
        className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all
              ${active === tab.value
                ? 'bg-white text-gray-800 shadow-sm border border-gray-200'
                : 'text-gray-500 hover:bg-white hover:text-gray-700'
              }`}
       >
         {tab.label} ({tab.count})
       </button>
     ))}
   </div>


    <DuplicateTable data={filteredData} />
    /</div>
    )  
}
export default ScanResult