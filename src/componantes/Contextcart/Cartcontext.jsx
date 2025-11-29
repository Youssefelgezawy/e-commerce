import React, { createContext, useEffect, useState } from 'react'

export const Cartcontext = createContext();
export default function CartProvider({ children }) {




  const [favorites, setFavorites] = useState(() => {
    const savedfavorites = localStorage.getItem('favoritesItems');
    return savedfavorites ? JSON.parse(savedfavorites) : []

  })

  const addtofavorites = (item) => {
    setFavorites((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item]
    })
  }

  useEffect(() => {
    localStorage.setItem("favoritesItems", JSON.stringify(favorites))
  }, [favorites])


  const removefavorites = (id) =>{
    setFavorites((prev)=>prev.filter((i)=>i.id !==id))
  }




  const [cartitem, setCartitem] = useState(() => {
    const savedcart = localStorage.getItem('cartItems');
    return savedcart ? JSON.parse(savedcart) : []

  })

  const increasquantity = (id) => {
    setCartitem(previtems => previtems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  const decreasequantity = (id) => {
    setCartitem(previtems => previtems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ))
  }

  const removefromcart = (id) => {
    setCartitem((previtems) => previtems.filter(item => item.id !== id))
  }







  const addtocart = (item) => {
    setCartitem((previtems) => [...previtems, { ...item, quantity: 1 }])
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartitem))
  }, [cartitem])


  return (
    <Cartcontext.Provider value={{
      cartitem,
      addtocart,
      increasquantity,
      decreasequantity,
      removefromcart,
      addtofavorites,
      favorites,
      removefavorites
    }}
    >

      {children}
    </Cartcontext.Provider>
  )


}






