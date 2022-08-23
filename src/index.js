import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CartContextProvider from './context/CartContext'
import { BrowserRouter as Router   } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <CartContextProvider>
      <App />
    </CartContextProvider>
    </Router>
    

  </React.StrictMode>
)





