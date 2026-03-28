

const recentScans = [
    { path: '/Documents' , files: '3,241', dups: '247', status: 'Done'},
    { path: '/Downloads', files: '8,102', dups: '891', status: 'Done'},
    { path: '/Desktop', files: '519', dups: '44', status: 'Done'},
    { path: 'Videos', files: '644', dups: '65', status: 'Partial'},
    { path: 'Backup', files: '-', dups: '-', status: 'Failed'},
]

 const statusStyles = {
    Done: 'bg-green-50 text-green-600',
    Partial: 'bg-amber-50 text-amber-600',
    Failed: 'bg-red-50 text-red-500',
 }

 function RecentScans(){
    return (
        <div className="bg-white border border-gray-200 rounded-xl">

         {/* Card Header*/}
         <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div>
                <h3 className="text-sm font-semibold text-gray-500">Recent Scans</h3>
                <p className="text-xs text-gray-400 mt-1">Last 5 sessions</p>
            </div>
         </div>

          {/*Tables*/}
          <div className="overflow-x-auto">

            <table className="w-full">

                {/*Table Header*/}
                <thead>
                    <tr className="bg-gray-50 border-b border-amber-100">
                      <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-3">PATH</th>
                      <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-3">FILES</th>
                      <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-3">DUPS</th>
                      <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide px-5 py-3">STATUS</th>
                    </tr>
                </thead>

              {/*TABLE BODY*/}
              <tbody>
                {recentScans.map((scan, index) => (
                     <tr
                      key={index}
                      className="border-b border-gray-50 hover:bg-gray-50 transition-all"                     
                     >
                       
                        <td className="px-5 py-3 text-sm font-medium text-gray-700">{scan.path}</td>
                        <td className="px-5 py-3 text-sm text-gray-500"></td>
                         <td className="px-5 py-3 text-sm text-gray-500"></td>
                         <td className="px-5 py-3">
                           <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[scan.status]}`}>
                              {scan.status}
                            </span>
                         </td>
                     </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
    )
 }

 export default RecentScans