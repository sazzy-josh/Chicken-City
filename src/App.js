import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Routes , Route ,useLocation  } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp'
import {AnimatePresence } from 'framer-motion'
import AuthContextProvider from './context/authContext'
import AboutUs from './pages/aboutUs'
import Food from './pages/foods'
import Helmet from './components/Helmet'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContainer from './components/cart';
import  { useCartsContext } from './context/CartContext';
import FlutterModal from './components/flutter/flutterModal';
import CheckoutSuccessful from './components/checkoutSuccessful';
import Cart from './pages/cart';


const contextClass = {
  success: "bg-green-700",
  error: "bg-red-600",
  info: "bg-gray-800",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

function App() {
   const { state: {showCart} , state : {showModal}  } = useCartsContext() 
   const location = useLocation()

  return (
    
     
     <AuthContextProvider >
          <AnimatePresence exitBeforeEnter>
       
        <div className="flex flex-col w-screen relative">
        {/* <CartContainer /> */}
        {showCart && <CartContainer />}
        {showModal && <FlutterModal /> } 
        <ToastContainer limit={5} toastClassName={({ type }) => contextClass[type || "default"] + 
        " relative flex p-2 min-h-10 w-3/4 sm:w-auto rounded-xl sm:rounded-xl justify-around overflow-hidden cursor-pointer my-2"
      }
      bodyClassName={() => "text-[14px]  font-slate-50 flex items-center overflow-hidden p-1"}
      autoClose={500} />
            <Header />
            <Routes location={location} key={location.key}>      
              <Route path='/' element={
                <Helmet title="Home">
                    <Home />    
                </Helmet>
              } />
              <Route path='/login' element={ <Helmet title="Login">
                    <Login /> 
                </Helmet> } />
              <Route path='/foods' element={ <Helmet title="foods">
                    <Food /> 
                </Helmet> } />
              <Route path='/Sign-up' element={<Helmet title="Sign-up">
                    <SignUp /> 
                </Helmet>} />
              <Route path='/aboutus' element={<Helmet title="About-us">
                    <AboutUs /> 
                </Helmet>} />

              <Route path='/payment-successful/:tx' element={<CheckoutSuccessful />} />
              <Route path='/cartItems3qPzZ26PeuhwEyCdgWWBXK2vGNF7' element={<Cart /> } />
               
            </Routes>
            <Footer />
        </div>
      
      </AnimatePresence>
     </AuthContextProvider>
  
    
    
    
  )
}

export default App
