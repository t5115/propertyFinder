import { useParams } from "react-router-dom";
import propertiesData from "../../public/properties.json";
import houseTemplate from "../assets/houseTemplate1.jpg"

function PropertyDetails() {

  /*Get property ID from url*/
  const {id} = useParams();

  /*Finding property*/
  const property = propertiesData.properties.find(p=>p.id===id);

  console.log(property);
  
  return(
    
    <h2>test</h2>
  );
}

export default PropertyDetails;