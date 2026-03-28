import React from "react"
import StatsCards from "../components/StatsCards"
import ScanSummary from "../components/ScanSummary"
import RecentScans from "../components/RecentScans"

function Dashboard(){
   return(
    <div>
        <StatsCards/>
        <div className="grid grid-cols-2 gap-4">
         <ScanSummary/>
         <RecentScans/>
        </div>
    </div>
   )
}

export default Dashboard