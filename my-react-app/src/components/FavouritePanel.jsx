import houseTemplate from "../assets/houseTemplate1.png"

function FavouritePanel(){
    return(
        <>
          <div className="favourite-panel">
            <div className="favourites">
              <img src={houseTemplate}></img>
            </div>
          </div>
        </>
    );
}

export default FavouritePanel