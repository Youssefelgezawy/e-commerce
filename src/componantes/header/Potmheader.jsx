import { useEffect, useState } from 'react';
import './potmheader.css';
import { Link, useLocation } from 'react-router-dom';

const navlinks = [
  {title:"Home" , link:"/"},
  {title:"About" , link:"/About"},
  {title:"Accessories" , link:"/Accessories"},
  {title:"Blog" , link:"/Blog"},
  {title:"Contact" , link:"/Contact"}
]


function Potmheader() {

  const location = useLocation ()
  const [categories, setCategories] = useState([]);
  const [iscategoryopen,setIscategoryopen] = useState (false)


  useEffect(() =>{
    setIscategoryopen(false)
  },[location])


  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data) => setCategories(data))
  }, [])


  
  return (
    <>

      <div className='Potmheader'>
        <div className="container">
          <div className="nav">
            <div className="category-nav">

              <div className="category-btn" onClick={()=>setIscategoryopen(!iscategoryopen)}>
                <i className="bi bi-list"></i>
                <p>Browse Category</p>
                <i className="bi bi-arrow-down-short"></i>
              </div>

              <div className={`category-nav-list ${iscategoryopen ? "active" : ""}`}>
                {categories.map((category) => (
                  <Link key={category.slug} to={`/category/${encodeURIComponent(category.slug)}`}>
                    {category.name}
                  </Link>
                ))}
              </div>

            </div>

            <div className="nav-links">
              {navlinks.map((item)=>(
                <Link className= {`links  ${location.pathname === item.link ? "active" : ""}`} to={item.link} key={item.link}>{item.title}</Link>
              ))}
            </div>

            <div className="nav-icons">
              <i className="bi bi-box-arrow-in-right"></i>
              <i className="bi bi-person-plus-fill"></i>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default Potmheader;