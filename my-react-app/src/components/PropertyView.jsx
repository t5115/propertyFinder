import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import houseTemplate from ".././assets/houseTemplate1.jpg"
import './PropertyView.css'

function PropertyView({property}) {

  if (!property) {
        return <p>Property not found</p>; /*Protect against random link typing */
    }

  return (
    <div className="parent-container">
        <div className="imageWrapper">
              <img src={houseTemplate} className="mainThumb"/>
        </div>
      
        <div className="information">
            <p className="price">£{property.price?.toLocaleString()}</p> 
            <p className="address">{property.location}</p>
            <div className="property-info">
                <p className="beds">{property.bedrooms} Bed</p>
                <p className="propertyType">{property.type}</p>
            </div>
        </div>

        <div className="react-tabs-wrapper">
            <Tabs>
                <TabList>
                    <Tab>Description</Tab>
                    <Tab>Floor Plan</Tab>
                    <Tab>Map</Tab>
                </TabList>

            <TabPanel>
                <p>{property.description}</p>
            </TabPanel>

            <TabPanel>
                <p>Floor plan will go here</p>
            </TabPanel>

            <TabPanel>
                <p>Map goes here</p>
            </TabPanel>

            </Tabs>
        </div>

    </div>
  );
}

export default PropertyView;
