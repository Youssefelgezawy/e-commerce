import React, { useContext } from 'react'
import './Cart.css'
import { Cartcontext } from '../../componantes/Contextcart/Cartcontext';

function Cart() {

  const { cartitem, increasquantity, decreasequantity, removefromcart } = useContext(Cartcontext)

  const total = cartitem.reduce((acc, item) => acc + item.price * item.quantity , 0)

  return (

    <div className="checkout">
      <div className="container">
        <div className="ourdersumary">
          <h1>ourdersumary</h1>

          <div className="items">
            {cartitem.length === 0 ? (
              <p>your cart is empty .</p>
            ) : (
              cartitem.map((item, index) => (
                <div className="itemcart" key={index}>
                  <div className="img-name">
                    <img src={item.images[0]} alt="" />

                    <div className="content">
                      <div className="info">
                        <h1>{item.title}</h1>
                        <p className='price-item'>{`$${(item.price * item.quantity).toFixed(2)}`}</p>

                        <div className="quantity-control">
                          <button onClick={()=>decreasequantity(item.id)}>-</button>
                          <div className="quantity">{item.quantity}</div>
                          <button onClick={()=>increasquantity(item.id)}>+</button>
                        </div>
                      </div>
                    </div>


                  </div>

                  <div className="delete-item">
                    <i onClick={()=>removefromcart(item.id)} className="bi bi-trash3-fill"></i>
                  </div>

                </div>
              ))
            )}


          </div>

          <div className="bottom-summary">
            <div className="shop-table">
              <p>Total:</p>
              <span className='Total-checkout'>${total.toFixed(2)}</span>
              
              
            </div>
            <div className="button-div">
              <button type="button" className="btn btn-outline-primary w-100">Place Order</button>

            </div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Cart;