import React, { useEffect, useState } from 'react'
import './Category.css'
import { data, useParams } from 'react-router-dom'
import Product from '../../componantes/Slideproduct/Product'


function Categorypage() {

  const { category } = useParams()

  const [categoryproducts, setCategoryproducts] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then((data)=>{
        setCategoryproducts(data.products)
      })
      
  }, [category])

  
  return (
    
      <div className="category-products">
        <div className="container">


           <div className="title">
            <h2> {category} </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            </div> 

          <div className="products">
                {categoryproducts.map((item,index)=>(
                  <Product item={item} key={index}  />
                ))}
          </div>

        </div>
      </div>

  )
}

export default Categorypage