import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './searchbox.css'

function Searchbox() {

    const [searchtrim,setSearchtrim] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(searchtrim.trim()){
          navigate(`/Search?query=${encodeURIComponent(searchtrim.trim())}`)

        }
    }


  return (
    <div>

        <div className="Searchbox">
            <form onSubmit={handleSubmit} className="seacch-box">
            <input type="text" name='search' id='search' placeholder='search' 
            onChange={(e)=>setSearchtrim(e.target.value) } />
            <button type='submit'><i className="bi bi-search"></i></button>
          </form>
        </div>
        


    </div>
  )
}

export default Searchbox