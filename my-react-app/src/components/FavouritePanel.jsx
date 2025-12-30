import houseTemplate from "../assets/houseTemplate1.png"
import heart from "../assets/heart.svg"


function FavouritePanel(){
    return(
        
        <div className="favourite-body"> {/*Parent body */}

          {/*Top bar */}
          <div className="top-bar">
            <h3>Favourites</h3>
          </div>
          
          {/*Main panel area */}
          <div className="favourite-panel">

            {/*Single template item */}
            <div className="favourites">
              <div className="image-wrapper">
                 <img className="favourite-img" src={houseTemplate}/>
                 <img className="heart-icon" src={heart}/>
              </div>
             
              <div className="item-details">
                <p className="price">£300,000</p>
                <p className="address">78 Burger Way</p>
              </div>
            </div>
            

          </div>
        </div>
    );
}

export default FavouritePanel