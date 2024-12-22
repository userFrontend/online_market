import {
  Navigate,
  Route,
  Routes,
  // useLocation,
  // useNavigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useInfoContext } from "./context/infoContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import OneProd from "./pages/OneProd/OneProd";
import Catalog from "./pages/Catalog/Catalog";
import Blogs from "./pages/Blogs/Blogs";
import OneBlog from "./pages/OneBlog/OneBlog";
import Orders from "./pages/Orders/Orders";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import "./App.css";

function App() {
  const { userId, loading } = useInfoContext();

  return (
    <>
      {!loading && <Header />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/prod/:prodId" element={<OneProd />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/checkout" element={<Orders />} />
        <Route path="/blog/:blogId" element={<OneBlog />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* <Route path="*" element={<Navigate to="/" replace /> : <OneProd /> } /> */}
      </Routes>
      {!loading && <Footer />}
    </>
  );
}

export default App;
