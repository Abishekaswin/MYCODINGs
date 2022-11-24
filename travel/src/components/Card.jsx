import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function Card(props) {
  return (
   <div  className='hrr'>
   
   <div   className='card'>
          
          
          <img src={props.item.image}  className='card--img' alt=" " />
          
          <div  className='all'>
          <FontAwesomeIcon icon={ faLocationDot }/>
          <h4 className='card--location'   > { props.item.location}</h4>
          <a className="card--location-url" href={props.item.googleMapsUrl}>
          View on Google Maps
        </a>
          <h1  className='card--title'    >{props.item.title}  </h1>
          <h4 className='card--date'  >{props.item.startDate}-{props.item.endDate}   </h4>
          <p  className='card--description'       >  {props.item.description}    </p>
         
          </div>
         
        
          </div>
          
      </div>
          
  )
}
