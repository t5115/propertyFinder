import { Link } from "react-router-dom";
import houseTemplate from "../assets/houseTemplate1.jpg";
import heart from "../assets/heart.svg";

function PropertyPanel({property}) {
  
  if (!property) return null;
  
  return (
    <>
      {/*Child Container*/}
      <div className="property-card">
        <Link>
          <img
              className="property-img"
              src={property.picture ? `/${property.picture}` : houseTemplate}
              alt="Property"
              onError={(e) => { e.target.src = houseTemplate; }}
            />
        </Link>
          <div className="right-box">
            <div className="info-box">
              <p className="price">£{property.price?.toLocaleString()}</p>
              <p className="address">{property.location}</p>
              <div className="property-details">
                  <p className="property-type">{property.type}</p>
                  <p className="bedrooms">{property.bedrooms} Beds</p>
              </div>
              <p className="description">{property.description?.substring(0, 120)}...</p>
            </div>
            <div className="bottom-box">
                <p>Date Added: {property.added?.day} {property.added?.month} {property.added?.year}</p>
                <img className="bottom-icon" src={heart}/>
            </div>
          </div>
      </div>
    </>
  )
}

export default PropertyPanel