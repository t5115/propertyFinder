import houseTemplate from "../assets/houseTemplate1.png"

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
              <img src={houseTemplate}/>
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