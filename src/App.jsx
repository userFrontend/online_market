import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import { useInfoContext } from './context/infoContext';
import Profile from './pages/Profile/Profile';
import './App.css'

function App() {
  const { userId } = useInfoContext();

  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/profile" element={!userId ? <Navigate to="/" replace /> : <Profile />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </>
  );
}

export default App
