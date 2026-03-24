import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProduct } from "../assets/asset";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setuser] = useState(false);
  const [isseller, setisseller] = useState(false);
  const [showUserLogin, setshowUserLogin] = useState(false);
  const [products, setproducts] = useState([]);
  const [cartItem, setcartItem] = useState({});
  const [searchQuery, setsearchQuery] = useState({});

  //Fetch Seller Status
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setisseller(true);
      } else {
        setisseller(false);
      }
    } catch (error) {
      setisseller(error.message);
    }
  };

  

  //Fetch user Auth status
  const fetchUser = async () => {
    try {
      const {data} = await axios.get('/api/user/is-auth');
      if(data.success){
        setuser(data.user)
        setcartItem(data.user.cartItem)
      }
    } catch (error) {
      setuser(null)
    }
  }

  useEffect(() => {
    fetchSeller();
    fetchUser();
  }, []);

  
    //Fetch All Products
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/product/list");
        if (data.success) {
          setproducts(data.products);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

  useEffect(()=>{
    fetchProducts()
  },[])

  useEffect(()=>{
   const updateCart = async () => {
    try {
      const {data} = await axios.post('/api/cart/update', {cartItem})
    if(!data.success){
      toast.error(data.message)
    }
    } catch (error) {
      toast.error(error.message)
    }
    
   }
   if(user){
    updateCart()
   }
  },[cartItem])

  //Add Product To Cart
  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setcartItem(cartData);
    toast.success("added to cart ");
  };

  //Updating cart item quantity
  const updateToCart = async (item, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[item] = quantity;
    setcartItem(cartData);
    toast.success("cart updated");
  };

  //Remove product from cart
  const removefromCart = async (cartitem) => {
    let cartData = structuredClone(cartItem);
    if (cartData[cartitem]) {
      cartData[cartitem] -= 1;
      if (cartData[cartitem] === 0) {
        delete cartData[cartitem];
      }
    }
    toast.success("delete from the cart");
    setcartItem(cartData);
  };

  //Get cart item count
  const getCartCount = () => {
    let totalcount = 0;
    for (let item in cartItem) {
      totalcount += cartItem[item];
    }
    return totalcount;
  };

  //Get total cart amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);
      if (cartItem[items].length > 0) {
        totalAmount += itemInfo.offerPrice * cartItem(items);
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  const value = {
    fetchProducts,
    navigate,
    user,
    setuser,
    isseller,
    setisseller,
    showUserLogin,
    setshowUserLogin,
    products,
    setproducts,
    currency,
    cartItem,
    setcartItem,
    // fetchProducts,
    addToCart,
    updateToCart,
    removefromCart,
    searchQuery,
    setsearchQuery,
    getCartAmount,
    getCartCount,
    axios,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppcontext = () => {
  return useContext(AppContext);
};
