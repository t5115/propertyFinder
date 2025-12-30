import { useParams } from "react-router-dom";
import propertiesData from "/properties.json";
import houseTemplate from "../assets/houseTemplate1.png";

function PropertyDetails() {
  const { id } = useParams(); // e.g. "prop1"

  const property = propertiesData.properties.find(
    p => p.id === id
  );

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-details">
      <h1>{property.location}</h1>

      <img
        src={property.picture ? `/${property.picture}` : houseTemplate}
        alt="Property"
        onError={(e) => {
          e.target.src = houseTemplate;
        }}
      />

      <p>{property.description}</p>
      <p>£{property.price}</p>
      <p>{property.type}</p>
    </div>
  );
}

export default PropertyDetails;
