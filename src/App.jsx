import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
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



function App() {
  return (
    <AuthContextProvider>
       <AnimatePresence>
      <Router>
      <div className="flex flex-col w-screen relative">
         <Header />
         <Routes>
            <Route path='/' element={
              <Helmet title="Home">
                 <Home /> 
              </Helmet>
            } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/foods' element={ <Food /> } />
            <Route path='/Sign-up' element={ <SignUp />} />
            <Route path='/aboutus' element={ <AboutUs />} />

          </Routes>
         <Footer />
      </div>
    </Router>
    </AnimatePresence>

    </AuthContextProvider>
    
    
    
  )
}

export default App
