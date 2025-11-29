import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Slideproduct from '../../componantes/Slideproduct/Slideproduct';
import Product from '../../componantes/Slideproduct/Product';
import './Searchresulte.css';

function Searchresult() {

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  const query = new URLSearchParams(useLocation().search).get('query');
  console.log(results);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        )
        const data = await res.json();
        setResults(data.products || [])
      } catch (error) {
        console.error("Search Error : ", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();

  }, [query]);

  return (
    <div className="Search-product">
      <div className="searchs">
        {loading ? (
        <Slideproduct key={query} />
      ) : (
        <div className="container">
          <div className="top-search">
            <h2>
              results for : {query}
            </h2>
          </div>

          <div className="search">
            {results.length > 0 ? (
              results.map((item, index) => (
                <Product item={item} key={index} />
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Searchresult
