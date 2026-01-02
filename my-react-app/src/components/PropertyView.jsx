import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

/* Swiper imports for the gallery*/
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';

/*Swiper CSS */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import useFavourites from "./hooks/useFavourites.js"

import houseTemplate from "../assets/houseTemplate1.jpg"
import './PropertyView.css'
import heart from "../assets/heart.svg"

function PropertyView({property}) {

  const { favourites, toggleFavourite } = useFavourites();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  if (!property) {
    return <p>Property not found</p>; /* Protect against random link typing */
  }

  const isFavourite = favourites.includes(property.id);

  // Helper function to prepend base URL
  const getImageUrl = (path) => path ? `${import.meta.env.BASE_URL}${path}` : houseTemplate;

  return (
    <div className="parent-container">
      {/* Holds images */}
      <div className="imageWrapper">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Navigation, Pagination, Thumbs]}
          className="main-slider"
        >
          {property.picture.map((pic, index) => (
            <SwiperSlide key={index}>
              <img src={getImageUrl(pic)} alt={`Property view ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Smaller Thumbnail Row Below */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="thumb-slider"
        >
          {property.picture.map((pic, index) => (
            <SwiperSlide key={index}>
              <img src={getImageUrl(pic)} alt={`Thumbnail ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Contains property info underneath image */}
      <div className="information">
        <p className="price">£{property.price?.toLocaleString()}</p> 
        <div className="second-row">
          <p className="address">{property.location}</p>
          <img
            className={`heart-btn ${isFavourite ? "favourited" : ""}`}
            src={heart}
            onClick={() => toggleFavourite(property.id)}
          />
        </div>
        
        <div className="property-info">
          <p className="beds">{property.bedrooms} Bed</p>
          <p className="propertyType">{property.type}</p>
          <p className="tenure">{property.tenure}</p>
        </div>
      </div>

      {/* Tabs can switch between under price */}
      <div className="react-tabs-wrapper">
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          <TabPanel>
            <p>{property.description}</p>
          </TabPanel>

          <TabPanel>
            {property.floorplan ? (
              <img
                src={getImageUrl(property.floorplan)}
                alt="Floor plan"
                className="floorplan-image"
              />
            ) : (
              <p>No floor plan available</p>
            )}
          </TabPanel>

          <TabPanel>
            <div className="map-container">
              <iframe
                title="Property location"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default PropertyView;
