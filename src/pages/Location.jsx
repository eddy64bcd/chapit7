import React from 'react';
import loft from '../assets/loft.png';  
import '../styles/location.css'; 
import Footer from '../components/Footer';
import Critere from '../components/Critere';
import { useParams } from 'react-router-dom';
import { getLocationById } from '../data/Location';

    

       function Location() {
        const { id } = useParams();
        
        const location = getLocationById (parseInt(id));
        console.log(location);

if (!location ) {
    return (
      <div className="page">
        <div className="employee-not-found">
          <h1>Employé non trouvé 🙈</h1>
          <p>L'employé demandé n'existe pas.</p>
        </div>
      </div>
    )
  }


  return (
    <>
    
    <div className='location-container'>
      <div className='location-image'>
        <img src={location.cover} alt={location.title} className='location-cover' />
      </div>
      <div className='location-info'>
        <h1 className='location-title'>{location.title}</h1>
        <p className='location-description'>{location.description}</p>
        <div className='location-criteres'>
          <Critere title="Equipements" items={location.equipments} />
          <Critere title="Tags" items={location.tags} />
        </div>
      </div>
    </div>  
      
           <Footer /> 
  </>
  )
       }

      
    
  
    

export default Location;
