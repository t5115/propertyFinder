import SearchResults  from "../components/SearchResults";
import PropertyPanel from "../components/PropertyPanel"
import FavouritePanel from "../components/FavouritePanel";
import propertiesData from "../../public/properties.json";
import '../components/SearchResults.css'
import '../components/PropertyPanel.css'
import '../components/FavouritePanel.css'
import '../pages/PropertyPage.css'

function PropertyPage(){
    
    const allProperties = propertiesData.properties;

    return (
        <>
            <SearchResults/>
        
        <div className="panels-container">
            <div className="property-container">
               {allProperties.map((item) => (
                  <PropertyPanel key={item.id} property={item} />
                ))}
                
            </div>
            <FavouritePanel/>
         </div>
             
              
          
        </>
    );
}

export default PropertyPage