import React from 'react'
import { FaTwitter ,FaFacebook ,FaInstagram ,FaGithub,  FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Main() {
  return (
    <div  className='main-el' >
        <div>
             <img src="/images/22064.jpg " className='img-el' alt="images" />
       </div>
       <div className='bot'>
       <div>
              
             <h1 className='name'>Abishek</h1>
             <h2>Frontend Developer </h2>
             <h3> Abishek.website</h3>
             <div> 
               <button className='email'  > <FaEnvelope/>  Email</button>
              <button className='linkedin'> <FaLinkedin/> Linkedin </button> 
             </div>
             <h1 className='abt'>About</h1>
             <p className='abtp'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
             <h1 className='inte' >INTERESTS </h1>
             <p className='intep'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
             
      </div>
             
       </div>
       <div className='icon'>
        
           <FaTwitter className='twitter'/>
           <FaFacebook className='facebook'  />
           <FaInstagram className='insta'      />
           <FaGithub className='github'  />
          
       </div>
    </div>
  )
}
