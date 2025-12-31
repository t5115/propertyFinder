import { useParams } from "react-router-dom";
import PropertyView from "../components/PropertyView";
import propertiesData from "../../public/properties.json";
import houseTemplate from "../assets/houseTemplate1.jpg"
import "./PropertyDetails.css"

function PropertyDetails() {

  /*Get property ID from url*/
  const {id} = useParams();

  /*Finding property*/
  const property = propertiesData.properties.find(p=>p.id===id);

  console.log(property);
  
  return(
    <div className="page-wrapper">
      <PropertyView property={property}/>
    </div>
  );
}

export default PropertyDetails;