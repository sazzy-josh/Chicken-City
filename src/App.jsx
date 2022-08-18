import { useState  } from 'react'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router ,Routes , Route , useLocation } from 'react-router-dom'
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

const contextClass = {
  success: "bg-green-700",
  error: "bg-red-600",
  info: "bg-gray-800",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

function App() {
   const { state: {showCart}} = useCartsContext() 

  return (
    
     
     <AuthContextProvider>
          <AnimatePresence>
        <Router location={location} key={location.key}>
        <div className="flex flex-col w-screen relative">
        {showCart && <CartContainer />}
        <ToastContainer limit={5} toastClassName={({ type }) => contextClass[type || "default"] + 
        " relative flex p-2 min-h-10 w-3/4 sm:w-auto rounded-xl sm:rounded-xl justify-around overflow-hidden cursor-pointer"
      }
      bodyClassName={() => "text-[14px]  font-slate-50 flex items-center overflow-hidden p-1"}
      autoClose={500} />
            <Header />
            <Routes>      
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

            </Routes>
            <Footer />
        </div>
      </Router>
      </AnimatePresence>
     </AuthContextProvider>
  
    
    
    
  )
}

export default App
