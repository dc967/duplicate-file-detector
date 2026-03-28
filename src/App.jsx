import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import Dashboard from './pages/Dashboard';
import UploadFile from './pages/UploadFile';
import ScanResult from './pages/ScanResult';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/results" element={<ScanResult />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
