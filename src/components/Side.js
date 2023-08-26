import React from 'react'
import Token from './Token'
import Pair from './Pair'

export default function Side() {
  return (
    
      <div className='container'>
          <div className="side">
          <img className='logo' src="https://th.bing.com/th/id/R.ce45b1d0fd00227b24dee0c1adc67727?rik=ua4IlxVNo79YvQ&riu=http%3a%2f%2fgreymarket.co%2fwp-content%2fuploads%2f2015%2f12%2flogo_white.png&ehk=rHqhxD7pNtK9T%2bMKlqneJqviZMwzXTbbPdf7SwHtDdU%3d&risl=&pid=ImgRaw&r=0" alt="" />
           <h2>NFTify</h2>
          </div>
           <Token/>
           <Pair/>
          <div className="wa">
            <img  className=" logo"src="https://th.bing.com/th/id/R.99762a5372cf950ee0402216326a6442?rik=xBCEYll8BUolIg&riu=http%3a%2f%2fclipart.info%2fimages%2fminicovers%2f1509135181Facebook-logo-png-red.png&ehk=ybty5YBNxeGOTEc1UHqvVjVOdiZj3sSM37W0qaqRyYY%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <img  className=" logo"src="https://gluggen.se/wwwdocs/_sites_media/190626-297/uploads/Yodo/Grafik/instagram%20icon%20red.png" alt="" />
            <img className=" logo" src="https://www.freepnglogos.com/uploads/twitter-red-logo-png-9.png" alt="" />
          </div>
           
    </div>
   
  )
}
