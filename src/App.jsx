import './App.css'
import Topheader from './componantes/header/Topheader'
import Potmheader from './componantes/header/Potmheader'
import Home from './pags/Home'
import { Route, Routes } from 'react-router-dom'
import Productdetels from './pags/Productdetels/Productdetels'
import Cart from './pags/Cart/Cart'
import Scroll from './componantes/Scroll/Scroll'
import Categorypage from './pags/Category/Categorypage.jsx';
import Searchresult from './pags/Searchresulte/Searchresult'
import Favorite from './pags/Favorite/Favorite'



function App() {
  

  return (
    <>
    <header>
      <Topheader />
      <Potmheader />
    </header>
      
    <Scroll />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Cart' element={<Cart />} />
      <Route path='Favorite' element={<Favorite />} />
      <Route path='/Search' element={<Searchresult />} />
      <Route path='/products/:id' element={<Productdetels />} />
      <Route path='/category/:category' element={<Categorypage />} />
    </Routes>
    

   </>
  )
}


export default App
