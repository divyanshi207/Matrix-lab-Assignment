import React from 'react'
import Side from './components/Side'
import Token from './components/Token'

export default function Body() {
 
  return (
    <div>
        <Side/>
    <form className="d-flex hello">
      <input className="form-control" type="search" placeholder="     Search" aria-label="Search"/>
      <img  className='logo_body'src="https://icon-library.com/images/search-icon-png-transparent/search-icon-png-transparent-18.jpg" alt="" />
    </form>
    <button className="connect">Connect</button>
    <div className="text">
        <h2>Welcome to the Home-Page</h2></div>
        <div className='ga'> 

        </div>
    </div>
  
    
  )
}
