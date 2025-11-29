import React, { useEffect, useState } from 'react'
import Slider from '../componantes/Slider/Slider';
import Slideproduct from '../componantes/Slideproduct/Slideproduct';



const categores = [
  "smartphones",
  "laptops",
  "mens-watches",
  "tops"
]



function Home() {

  const [products, setProducts] = useState({})
  const [looding, setLooding] = useState(true)



  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const results = await Promise.all(
          categores.map(async (category) => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            return { [category]: data.products }
          })
        )

        const produtsData = Object.assign({}, ...results)
        setProducts(produtsData)


      } catch (error) {
        console.error("Error fetching", error)
      }finally{
        setLooding(false)
      }
    }
    fetchproduct()
  }, [])

  



  return (
    <>
      <div className="Home">
        
        <div className="Slider">
          <Slider />
        </div>


        {looding ? (
          <p>Looding.....</p>
        ) : (categores.map((category) => (
          <Slideproduct key={category} data={products[category]} title={category} />

        )))
        }







      </div>

    </>
  )
}

export default Home;