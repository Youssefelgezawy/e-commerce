import React, { useContext } from 'react'
import './Favorite.css'
import { Cartcontext } from '../../componantes/Contextcart/Cartcontext';
import Product from '../../componantes/Slideproduct/Product';

function favorite() {

  const { favorites } = useContext(Cartcontext)


  return (


    <div className="favorite-products">
      <div className="container">
        <div className="top-slide">
          <h2>Youre favorites</h2>
        </div>

        {favorites.length === 0 ? (
          <p>No favorite products.</p>
        ) : (
          <div className="products">
            {favorites.map(item => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        )}



      </div>
    </div>



  )
}

export default favorite;