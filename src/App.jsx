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
import CartContextProvider from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 
  return (
    
    <CartContextProvider>
     <AuthContextProvider>
          <AnimatePresence>
        <Router location={location} key={location.key}>
        <div className="flex flex-col w-screen relative">
        <ToastContainer limit={5} />
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
    </CartContextProvider>
    
    
    
  )
}

export default App
