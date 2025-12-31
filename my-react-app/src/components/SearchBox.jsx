
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import "react-widgets/styles.css";
import { DropdownList } from "react-widgets";
import { Combobox } from "react-widgets";


import './SearchBox.css';
import { valueMatcher } from "react-widgets/cjs/Accessors";

import '../index.css'


function SearchBox() {

    /*Stores*/

    /*Postcode*/
    const [area, setArea] = useState(""); 
    const areaOptions = ["London","York","Birmingham","Manchester","Westminster","Orpington"];


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

    /* Ensures minPrice is never higher than maxPrice */
    const handlePriceChange = (type, value) => {
      const min = type === "min" ? value : minPrice || 0;
      const max = type === "max" ? value : maxPrice || Infinity;

      if (type === "min") {
        if (value > max) {
          setMinPrice(""); // reset to empty / no min
        } else {
          setMinPrice(value);
        }
      } else if (type === "max") {
        if (min > value) {
          setMaxPrice(""); // reset to empty / no max
        } else {
          setMaxPrice(value);
        }
      }
    };

    /*Bedroom Number*/
    const [minBedrooms, setMinBedrooms] = useState("Any");
    const [maxBedrooms, setMaxBedrooms] = useState("Any");  

    const minBedroomOptions = ["Any", "1", "2", "3", "4", "5"];
    const maxBedroomOptions = ["Any", "1", "2", "3", "4", "5+"];

    /* Ensures minBedrooms is never higher than maxBedrooms*/
    const handleBedroomChange = (type, value) => {
      /* Convert selected values into comparable numbers */
      const min =
        value === "Any" || (type === "max" && minBedrooms === "Any")
          ? 0
          : Number(type === "min" ? value : minBedrooms);

      const max =
        value === "Any" || (type === "max" && value === "5+")
          ? Infinity
          : Number(type === "max" ? value : maxBedrooms);

      /* Reset if the range becomes invalid (min > max) */
      if (min > max) {
        type === "min" ? setMinBedrooms("Any") : setMaxBedrooms("Any");
        return;
      }

      /* Update the selected bedroom value */
      type === "min" ? setMinBedrooms(value) : setMaxBedrooms(value);
    };

    
    /*Page Navigation*/
     const navigate = useNavigate(); 

    const handleSearch = (e) => {
      e.preventDefault();          

      if (!area || area.trim() === "") {
        alert("Please enter an area or postcode");
        return; 
      }
      
      const searchCriteria = {
        area,
        propertyType,
        addedToSite,
        minPrice: parseInt(minPrice) || 0,
        maxPrice: parseInt(maxPrice) || Infinity,
        minBedrooms,
        maxBedrooms
      };
      console.log("Search Values:", { searchCriteria }); 
      
      navigate("/property", { state: searchCriteria });
   
    };

   return (
    <div className='container'> {/*Parent Container*/}
        <h2>Search properties for sale.</h2>

        {/*Buttons Parent*/}
        <form className="search-form">

             {/*Postcode Search Input */}
            <div id="postcode-search-input">
              <p>Area*</p>
                <div className="form-button">
                  <Combobox
                    data={areaOptions}         
                    placeholder="Search by area" 
                    value={area}              
                    onChange={(value) => setArea(value)} 
                    defaultValue="New York"     
                    hideCaret={false}           
                    hideEmptyPopup={true}       
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
                    onChange={(value) => handlePriceChange("min", value)}
                    placeholder="No min £"
                    textField={(price)=>`£${price.toLocaleString()}`}
                  />
                  <span className="price-separator">–</span>
                  <DropdownList
                    
                    data={priceOptions}
                    value={maxPrice||null}
                    onChange={(value) => handlePriceChange("max", value)}
                    placeholder="No max £"
                    textField={(price)=>`£${price.toLocaleString()}`} 
                  />
                </div>
            </div>

            {/* No of bedrooms input */}
            <div className="bedrooms-input">
              <p>Number of bedrooms</p>

              <div className="bedrooms-range-wrapper">
                <div className="form-button">
                  <DropdownList
                    data={minBedroomOptions}
                    value={minBedrooms}
                    onChange={(value) => handleBedroomChange("min", value)}
                    placeholder="Min"
                  />
                </div>

                <span className="bedroom-separator">–</span>

                <div className="form-button">
                  <DropdownList
                    data={maxBedroomOptions}
                    value={maxBedrooms}
                    onChange={(value) => handleBedroomChange("max", value)}
                    placeholder="Max"
                    />
                </div>
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
