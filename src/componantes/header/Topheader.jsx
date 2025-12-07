import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import './Topheader.css'
import { useContext } from 'react'
import { Cartcontext } from '../Contextcart/Cartcontext'
import Searchbox from './Searchbox'


function Topheader() {

  const { cartitem, favorites } = useContext(Cartcontext)

  return (
    <>

      <div className="Topheader">
        <div className="container">
          <Link className='logo' to="/"> <img src={logo} alt="logo" className="img-fluid logo-img"/></Link>

          <Searchbox />

          <div className="header-icons">
            <div className="icon">
              <Link to="/Favorite">
                <i className="bi bi-heart"></i>
                <span className='count'>{favorites.length}</span>
              </Link>
            </div>
            <div className="icon">
              <Link to='/Cart'>
                <i className="bi bi-cart4"></i>
                <span className='count'>{cartitem.length}</span>
              </Link>
            </div>
          </div>


        </div>

      </div>


    </>
  )
}

export default Topheader;