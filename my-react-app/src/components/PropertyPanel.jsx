import houseTemplate from "../assets/houseTemplate1.png"
import heart from "../assets/heart.svg"

function PropertyPanel() {
  return (
    <>
      {/*Parent Container*/} 
      <div className="property-container">

          {/*Child Container*/}
          <div className="property-card">
              <img className="property-img" src={houseTemplate}/>
              <div className="right-box">
                <div className="info-box">
                  <p className="price">£300,000</p>
                  <p className="address">42 Finchley Crescent BL6 TXU</p>
                  <div className="property-details">
                      <p className="property-type">House</p>
                      <p className="bedrooms">2 Beds</p>
                  </div>
                  <p className="description">Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood..</p>
                </div>
                <div className="bottom-box">
                    <p>Date Added: 28 Oct 2025</p>
                    <img className="bottom-icon" src={heart}/>
                </div>
              </div>
          </div>
          
      </div>
    </>
  )
}

export default PropertyPanel