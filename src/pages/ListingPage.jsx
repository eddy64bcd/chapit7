import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import StarRating from '../components/StarRating/index';
import Collapse from '../components/Collapse/index';
import Caroussel from '../components/Caroussel/index';
import Listings from '../data/Location';
import '../styles/ListingPage.css';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

  const ListingPage = () => {
  const { id } = useParams();
  const listing = Listings.find((l) => l.id === id);

  if (!listing) return <Navigate to="/error" replace />;
  
  return (
    <>
      <div className="container-listing">
        <Header />
        {/* Cover */}
        <div className="container-image">
         <Caroussel pictures={listing.pictures} />
        </div>

        {/* Info row */}
        <div className="container-info">
          <div className="container-location">
            <div className="listing-location">
              <h1 className="location-title">{listing.title}</h1>
              <p className="location-paragraphe">{listing.location}</p>
            </div>
            <div className="listing-tag">
              {listing.tags.map((tag) => (
                <span className="tag-list" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="container-host">
            <div className="listing-name">
              <p className="name-host">{listing.host.name}</p>
              <img
                className="picture-host"
                src={listing.host.picture}
                alt={listing.host.name}
              />
            </div>
            <StarRating rating={listing.rating} />
          </div>
        </div>

        {/* Collapses */}
        <div className="container-collapse">
          <Collapse className="listing-collapse" title="Description">
            {listing.description}
          </Collapse>
          <Collapse className="listing-collapse" title="Équipements">
            <ul>
              {listing.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListingPage;
