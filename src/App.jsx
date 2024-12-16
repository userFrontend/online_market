import {
  Navigate,
  Route,
  Routes,
  // useLocation,
  // useNavigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { useInfoContext } from "./context/infoContext";
import Profile from "./pages/Profile/Profile";
import OneProd from "./pages/OneProd/OneProd";
import "./App.css";
import Catalog from "./pages/Catalog/Catalog";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  const { userId } = useInfoContext();

  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/catalog" element={<Catalog />} />
        <Route index path="/blog" element={<Blogs />} />
        <Route index path="/prod/:prodId" element={<OneProd />} />
        <Route path="/profile" element={!userId ? <Navigate to="/" replace /> : <Profile />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
        {/* <Route path="*" element={<Navigate to="/" replace /> : <OneProd /> } /> */}
      </Routes>
    </>
  );
}

export default App;
