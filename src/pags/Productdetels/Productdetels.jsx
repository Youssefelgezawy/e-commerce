import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Productdetels.css'
import Slideproduct from "../../componantes/Slideproduct/Slideproduct";
import { Cartcontext } from '../../componantes/Contextcart/Cartcontext';




function Productdetels() {
  const { id } = useParams()
  const { cartitem, addtocart } = useContext(Cartcontext);
const isIncart = cartitem.some(i => i.id === Number(id));

  

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const [relatedproducts, setRelatedproducts] = useState([])
  const [loadingrelatedproducts, setLoadingrelatedproducts] = useState(true)




  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setProduct(data)

      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false)
      }

    }
    fetchproduct()
  }, [id])


  useEffect(() => {
    if (!product) return
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedproducts(data.products)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingrelatedproducts(false))
  }, [product?.category])







  if (loading) return <p>Loading...</p>
  if (!product) return <p>Product Note Found</p>


  return (

    <div>

      <div className="item-detels">
        <div className="container">

          <div className="img-item">

            <div className="big-img">
              <img id='big-img' src={product.images[0]} alt={product.title} />

            </div>
            <div className="sm-img">
              {product.images.map((img, index) => (
                <img key={index} src={img} alt={product.title} onClick={() => document.getElementById("big-img").src = img} />
              ))}


            </div>

          </div>


          <div className="detels-item">

            <h1 className='name'>{product.title}</h1>
            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>
            <p className='price'>$ {product.price}</p>
            <h5>Availability: <span>{product.Availabilitystatus}</span></h5>
            <h5>Brand: <span>{product.brand}</span></h5>
            <p className='description'>{product.description}</p>
            <h5 className='stock'><span>Hurry up! Only {product.stock} products left in stock.</span></h5>

            <button onClick={() => !isIncart && addtocart(product)} className='btn' disabled={isIncart}>{isIncart ? "In Cart" : "Add To Cart"} <i className="bi bi-cart"></i></button>


            <div className="icons">
              <i className="bi bi-suit-heart"></i>
              <i className="bi bi-share"></i>
            </div>


          </div>

        </div>
      </div>


        {loadingrelatedproducts ?(
          <p>Loading.....</p>
        ):(
          <Slideproduct key={product.category} data={relatedproducts} title={product.category.replace("-"," ")} />
        ) }

    </div>




  )
}

export default Productdetels;





