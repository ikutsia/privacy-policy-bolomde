import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivacyPolicyPage />} />
        <Route path="/ka" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
