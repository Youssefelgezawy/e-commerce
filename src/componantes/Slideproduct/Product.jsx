import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Cartcontext } from '../../componantes/Contextcart/Cartcontext';


function Product({ item }) {

    const { cartitem, addtocart, addtofavorites, favorites, removefavorites } = useContext(Cartcontext);


    const isIncart = cartitem.some(i => i.id === item.id);
    const isinfavorite = favorites.some(i => i.id === item.id);

    const handeladdtpfavorite = () => {
        if (isinfavorite) {
            removefavorites(item.id)
        } else {
            addtofavorites(item)
        }
    }


    return (
        <>

            <div className={`product ${isIncart ? 'in-cart' : ''}`}>
                <Link to={`/products/${item.id}`}>
                    <div className="img-product">
                        <img src={item.images[0]} alt="iphone1" />
                    </div>

                    <p className="name-product">{item.title}</p>

                    <div className="stars-product">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                    </div>

                    <p className='price'>$ {item.price}</p>
                </Link>

                <div className="icons">
                    <i onClick={() => addtocart(item)} className="btn bi-cart"></i>
                    <i className={`bi bi-suit-heart ${isinfavorite ? "infavorite" : ""}`} onClick={handeladdtpfavorite}></i>
                    <i className="bi bi-share"></i>
                </div>
            </div>


        </>
    )
}

export default Product;






















