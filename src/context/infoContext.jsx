import { createContext, useContext, useEffect, useState } from "react";
// import { changeLang } from "../language";
import { getOneReq, getReq } from "../api/getRequeset";

const InfoContext = createContext();

export const useInfoContext = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("user_id") || null);
  // const [language, setLanguage] = useState(changeLang(localStorage.getItem("language")) || changeLang('uz'))
  // const [theme, setTheme] = useState(localStorage.getItem("mode") || 'light');
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = useState(initialCart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProd = async () => {
      try {
        setLoading(true);
        const response = await getReq("prod");
        console.log(response.data.prod);
        setProducts(response.data.prod);

        // Ma'lumotlarni qaytarish
      } catch (error) {
        console.error("Error fetching products:", error.message || error);
      } finally {
        setLoading(false);
      }
    };
    getProd();
  }, []);

  // Savatchani localStorage ga saqlash
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Mahsulotni savatchaga qo'shish funksiyasi
  const addToCart = (e, product) => {
    e.preventDefault();
    console.log(product.ID);

    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  // Mahsulot miqdorini oshirish
  const increment = (e, productId) => {
    e.preventDefault();
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.ID == productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Mahsulot miqdorini kamaytirish
  const decrement = (e, productId) => {
    e.preventDefault();
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.ID == productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Mahsulotni savatchadan o'chirish
  const removeFromCart = (e, productId) => {
    e.preventDefault();
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.ID !== productId)
    );
  };

  // Umumiy narxni hisoblash
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getOneReq(userId, "user");
        console.log(data.user);
        setCurrentUser(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    if (userId && !currentUser) getUser();
  }, [userId]);

  // const handleLanguageChange = (lang) => {
  //   const newTranslations = changeLang(lang);
  //   setLanguage(newTranslations);
  //   localStorage.setItem('language', lang)
  // };

  const exit = () => {
    localStorage.removeItem("verification_tokenauthuser");
    localStorage.removeItem("user_id");
    setUserId(null);
  };
  const value = {
    currentUser,
    setCurrentUser,
    exit,
    userId,
    setUserId,
    addToCart,
    removeFromCart,
    totalPrice,
    cartItems,
    setCartItems,
    increment,
    decrement,
    products,
    loading,
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};
