import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import ProductModal from './Components/ProductModal';
import Listing from "./Pages/Home/Listing";
import Footer from "./Components/Footer";
import ProductDetails from "./Pages/Home/ProductDetails";
import Cart from "./Pages/Home/Cart";
import SignIn from "./Pages/Home/SignIn";
import SignUp from "./Pages/Home/SignUp";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProductModal,setisOpenProductModal]= useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow]= useState(true);
  const [isLogin, setIsLogin]= useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModal,
    setisOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header />
        }
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route exact={true} path="/product/:id" element={<ProductDetails/>}/>
          <Route exact={true} path="/cart" element={<Cart/>}/>
          <Route exact={true} path="/signin" element={<SignIn/>}/>
          <Route exact={true} path="/signup" element={<SignUp/>}/>
        </Routes>
        {
      isOpenProductModal===true && <ProductModal/>
        }
      </MyContext.Provider>
      {
          isHeaderFooterShow === true && <Footer/>
        }
      
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
