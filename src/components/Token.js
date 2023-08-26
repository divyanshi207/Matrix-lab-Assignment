// import React from 'react'
import Body from '../Body'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default function Token() {
  function HandleClick(){
    console.log('hi');
    <li><Link className="na" to="/Token">Token Address</Link></li>
  }
  return (
    <div>
        <div className="taa">
           <img className="logo tokenlogo"src="https://clipground.com/images/web-logo-png-white-7.png" alt="" />
           <button className='ta' onClick={HandleClick}>Token Address</button>
        </div>
    </div>
  )
}
