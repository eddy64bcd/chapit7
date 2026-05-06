
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';




const Card = ({ listing }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div className='section-card'>
    <div className='container-card'>
    <div className='card'
      onClick={() => navigate(`/listing/${listing.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "0 12px 32px rgba(255,96,96,0.3)" : "0 4px 16px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={listing.cover}
        alt={listing.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
     
      <div className='container-title'> 
       
        <p className='card-title'>
          {listing.title}
        </p>
      </div>
    </div>
    </div>
    </div>
  );
};


export default Card;