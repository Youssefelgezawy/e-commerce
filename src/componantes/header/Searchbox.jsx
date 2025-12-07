import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
            <form onSubmit={handleSubmit} className="d-flex seacch-box align-items-center">
            <input type="text" name='search' id='search' placeholder='search'className="form-control me-2" 
            onChange={(e)=>setSearchtrim(e.target.value) } />
            <button type='submit' className='btn btn-outline-secondary'><i className="bi bi-search"></i></button>
          </form>
        </div>
        


    </div>
  )
}

export default Searchbox