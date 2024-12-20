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
import OneBlog from "./pages/OneBlog/OneBlog";
import Orders from "./pages/Orders/Orders";
import Loader from "./components/Loading/Loading";

function App() {
  const { userId, cartItems } = useInfoContext();

  return (
    <>
     <Loader/>
    </>
  );
}

export default App;
