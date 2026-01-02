import useFavourites from "./hooks/useFavourites";
import houseTemplate from "../assets/houseTemplate1.jpg"
import heart from "../assets/heart.svg"
import propertiesData from "../data/properties.json"
import { Link } from "react-router-dom";


function FavouritePanel(){

    const { favourites, toggleFavourite } = useFavourites();
    const favouriteProperties = propertiesData.properties.filter((p) =>
       favourites.includes(p.id)
     );

    return(
        <div className="favourite-body"> {/*Parent body */}

          {/*Top bar */}
          <div className="top-bar">
            <h3>Favourites</h3>
          </div>

          {/*Remove all*/}
          {favouriteProperties.length > 0 && ( 
            <div className="remove-all"> {/*Doesnt Show this is no favourites */}
              <button
                className="remove-favourite-btn"
                onClick={() => favourites.forEach(id => toggleFavourite(id))}
              >
                Remove all
              </button>
            </div>
          )}
                  
          <div className="favourite-panel">
            {favouriteProperties.length === 0 ? (
              <p>No favourites yet!</p>
            ) : (
              favouriteProperties.map((property) => (
               <Link
                  key={property.id}
                  to={`/property/${property.id}`}
                  className="favourites"
                >
                  <div className="image-wrapper">
                    <img
                      className="favourite-img"
                      src={property.picture?.[0] || houseTemplate}
                      alt="Property"
                    />
                    <img data-testid="list-fav-btn" className="heart-icon" src={heart} onClick={(e)=>{
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavourite(property.id)
                    }}/>
                  </div>

                  <div className="item-details">
                    <p className="price">£{property.price?.toLocaleString()}</p>
                    <p className="address">{property.location}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
    );
}

export default FavouritePanel