import SearchResults  from "../components/SearchResults";
import PropertyPanel from "../components/PropertyPanel"
import FavouritePanel from "../components/FavouritePanel";
import '../components/SearchResults.css'
import '../components/PropertyPanel.css'
import '../components/FavouritePanel.css'
import '../pages/PropertyPage.css'

function PropertyPage(){
    return (
        <>
            <SearchResults/>
            <div className="panels-container">
              <PropertyPanel/>
              <FavouritePanel/>
            </div>
        </>
    );
}

export default PropertyPage