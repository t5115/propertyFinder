import { useParams } from "react-router-dom";
import propertiesData from "../../public/properties.json";
import houseTemplate from "../assets/houseTemplate1.jpg"

function PropertyDetails() {
  // 1️⃣ Read ID from the URL (e.g. "prop3")
  const { id } = useParams();

  // 2️⃣ Find the matching property in the JSON
  const property = propertiesData.properties.find(
    p => p.id === id
  );

  // 3️⃣ Safety check
  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div className="property-details">

      {/* Location */}
      <h1>{property.location}</h1>

      {/* Main image */}
      <img
        src={property.picture ? `/${property.picture}` : houseTemplate}
        alt={property.type}
        onError={(e) => {
          e.target.src = houseTemplate;
        }}
      />

      {/* Key info */}
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>

      {/* Description */}
      <p>{property.description}</p>

      {/* Added date */}
      <p>
        <strong>Added:</strong>{" "}
        {property.added.day} {property.added.month} {property.added.year}
      </p>

    </div>
  );
}

export default PropertyDetails;