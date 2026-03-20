
import { Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from 
import Dashboard from './pages/Dashboard'
import UploadFile from './pages/UploadFile'
import ScanResult from './pages/ScanResult'
import Settings from './pages/Settings'

function App() {
 

  return (
   <Routes>
       <Routes elment={<DefaultLayout/>}></Routes>
       <Routes path="/" elment={<Dashboard/>} />
        <Routes path="/upload" elment={<UploadFile/>} />
         <Routes path="/results" elment={<ScanResult/>} />
           <Routes path="/settings" elment={<Settings/>} />
      </Routes>
   </Routes>
  )
}

export default App
