
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import "react-widgets/styles.css";
import { DropdownList } from "react-widgets";

import './SearchBox.css';
import { valueMatcher } from "react-widgets/cjs/Accessors";

import '../index.css'


function SearchBox() {

    /*Stores*/

    /*Postcode*/
    const [postcode, setPostcode] = useState(""); 

    /*Property Type */
    const [propertyType, setPropertyType] = useState("Any"); 
    const propertyOptions = ["Any","House", "Flat", "Studio"];

    /*Date Added*/
    const [addedToSite,setAddedDate] = useState("Anytime");
    const addedOptions = ["Last 24 hours","Last 3 days","Last 7 days","Last 28 days"];

    /*Price Range*/
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const priceOptions = [
      50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000,
      600000, 700000, 800000, 900000, 1000000, 1250000, 1500000, 1750000, 2000000,
      2500000, 3000000, 3500000, 4000000, 4500000, 5000000,
      6000000, 7000000, 8000000, 9000000, 10000000, 12500000, 15000000, 17500000, 20000000,
    ];

    /*Bedroom Number*/
    const [bedrooms, setBedrooms] = useState("Any");
    const bedroomOptions = ["Any","Studio","1","2","3","4","5+"];  
    
    /*Page Navigation*/
     const navigate = useNavigate();  // get navigate function

    const handleSearch = (e) => {
      e.preventDefault();           // prevent default form submission
      console.log("Search Values:");
      console.log("Postcode:", postcode);
      console.log("Property Type:", propertyType);
      console.log("Added To Site:", addedToSite);
      console.log("Min Price:", minPrice);
      console.log("Max Price:", maxPrice);
      console.log("Bedrooms:", bedrooms);
      navigate("/property");       
    };

   return (
    <div className='container'> {/*Parent Container*/}
        <h2>Search properties for sale.</h2>

        {/*Buttons Parent*/}
        <form className="search-form">

             {/*Postcode Search Input */}
            <div id="postcode-search-input">
                <p>Area</p>
                  <div className="form-button"> 
                    <input className="form-field"
                        type="search"
                        placeholder="Search by postcode area"
                        value={postcode}
                        onChange={(e)=>setPostcode(e.target.value)}
                        />
                  </div>
            </div>

            {/*Area dropdown input*/}
            <div id="property-types-input">
                <p>Property Type</p>
                  <div className="form-button"> 
                    <DropdownList
                      
                      data={propertyOptions}
                      value={propertyType}
                      onChange={(value) => setPropertyType(value)}
                    />
                  </div>
            </div>
            
            {/*Date added dropdown menu*/}
            <div id="date-added-input">
                <p>Added to site</p>
                  <div className="form-button"> 
                      <DropdownList
                        data={addedOptions}
                        value={addedToSite}
                        onChange={(value)=>setAddedDate(value)}
                      />
                  </div>
            </div>

            {/*Price range input*/}
            <div id="price-range-input">
                <p>Price range</p>
                <div className="price-range-wrapper">
                  <DropdownList
                    
                    data={priceOptions}
                    value={minPrice||null}
                    onChange={(value)=>setMinPrice(value)}
                    placeholder="No min £"
                    textField={(price)=>`£${price.toLocaleString()}`}
                  />
                  <span className="price-separator">–</span>
                  <DropdownList
                    
                    data={priceOptions}
                    value={maxPrice||null}
                    onChange={(value)=>setMaxPrice(value)}
                    placeholder="No max £"
                    textField={(price)=>`£${price.toLocaleString()}`} 
                  />
                </div>
            </div>

            {/*No of bedrooms input*/}
            <div id="bedrooms-input">
              <p>Number of bedrooms</p>
              <div className="form-button">
                <DropdownList
                  data={bedroomOptions}
                  value={bedrooms}
                  onChange={(value)=>setBedrooms(value)}
                />
              </div>
            </div>

            {/*Search button*/}
            <div id="search-button">
                <button type="submit" className='form-field'  onClick={handleSearch}>Search</button>
            </div>


            
 
        </form>
    </div>
   );
}

export default SearchBox;
