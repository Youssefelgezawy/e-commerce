import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './componantes/Contextcart/Cartcontext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <CartProvider>
        <App />
      </CartProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
)




