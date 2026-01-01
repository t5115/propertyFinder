import { Link } from "react-router-dom";
import useFavourites from "./hooks/useFavourites.js"
import houseTemplate from "../assets/houseTemplate1.jpg";
import heart from "../assets/heart.svg";

function PropertyPanel({property}) {
  
  if (!property) return null;
  
  const { favourites, toggleFavourite } = useFavourites();
  const isFavourite = favourites.includes(property.id);

  console.log(property.id, `/property/${property.id}`);

  return (
    <>
      {/*Child Container*/}
      <div className="property-card">
        <Link to={`/property/${property.id}`} className="property-link">
          <div className="property-image-wrapper">
            <img
              className="property-img"
              src={property.picture?.[0] || houseTemplate}
              alt="Property"
            />
          </div>
        </Link>
          <div className="right-box">
            <Link to={`/property/${property.id}`} className="property-link">
              <div className="info-box">
              <p className="price">£{property.price?.toLocaleString()}</p>
              <p className="address">{property.location}</p>
              <div className="property-details">
                  <p className="bedrooms">{property.bedrooms} Bed</p>
                  <p className="property-type">{property.type}</p>
                  <p className="tenure">{property.tenure}</p>
              </div>
              <p className="description">{property.description?.substring(0, 120)}...</p>
            </div>
            </Link>
            <div className="bottom-box">
                <p>Date Added: {property.added?.day} {property.added?.month} {property.added?.year}</p>
                <img className={`bottom-icon ${isFavourite ? "favourited" : ""}`} 
                     src={heart}
                     onClick={()=>toggleFavourite(property.id)}
                />
            </div>
          </div>
      </div>
    </>
  )
}

export default PropertyPanel