
import { createContext, useContext, useEffect, useState } from "react";
import { changeLang } from "../language";
import { getOneReq } from "../api/getRequeset";


const InfoContext = createContext()

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [userId, setUserId] = useState(localStorage.getItem("user_id") || null)
    // const [language, setLanguage] = useState(changeLang(localStorage.getItem("language")) || changeLang('uz'))
    // const [theme, setTheme] = useState(localStorage.getItem("mode") || 'light');
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cartItems, setCartItems] = useState(initialCart);
  
    // Savatchani localStorage ga saqlash
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
  
    // Mahsulotni savatchaga qo'shish funksiyasi
    const addToCart = (product) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find(item => item.id === product.id);
        if (existingItem) {
          return prevItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
    };
  
    // Mahsulot miqdorini oshirish
    const increment = (productId) => {
      setCartItems((prevItems) =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };
  
    // Mahsulot miqdorini kamaytirish
    const decrement = (productId) => {
      setCartItems((prevItems) =>
        prevItems.map(item =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    };
  
    // Mahsulotni savatchadan o'chirish
    const removeFromCart = (productId) => {
      setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };
  
    // Umumiy narxni hisoblash
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    useEffect(() => {
        const getUser = async () => {
            try {
                const {data} = await getOneReq(userId, 'user')
                console.log(data.user);
                setCurrentUser(data.user)
            } catch (error) {
                console.log(error);
                
            }
        }
        if(userId && !currentUser) getUser()
    }, [userId])

    // const handleLanguageChange = (lang) => {
    //   const newTranslations = changeLang(lang);
    //   setLanguage(newTranslations);
    //   localStorage.setItem('language', lang)
    // };

    const exit = () => {
        localStorage.removeItem('verification_tokenauthuser')
        localStorage.removeItem('user_id')
        setUserId(null)
    }
     const value = {
        currentUser, setCurrentUser, exit, userId, setUserId,
        addToCart, removeFromCart, totalPrice, cartItems, setCartItems,
        increment, decrement
    }

 
    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}