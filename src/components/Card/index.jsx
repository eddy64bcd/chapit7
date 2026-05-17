import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';

const Card = ({ listing }) => {
  const navigate = useNavigate();

  return (
    <div className="section-card">
      <div className="container-card">
        <div
          className="card"
          onClick={() => navigate(`/listing/${listing.id}`)}
        >
          <img className="card-image" src={listing.cover} alt={listing.title} />

          <div className="container-title">
            <p className="card-title">{listing.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
