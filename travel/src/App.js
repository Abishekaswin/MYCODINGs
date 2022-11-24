import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import separte from './separte'

export default function App() {
  const cards =separte.map(item =>{
  return(
       <Card
               key ={item.id}  
               item ={item}
              
            
            
            
      />

  )})


  return (
    <div  className='total'>
             
            <Navbar/>
            <section className='cards--list'   >
               {cards}
              
               </section>
               
          
    </div>
  )
}




