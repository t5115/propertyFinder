import "react-widgets/styles.css";
import { DropdownList } from "react-widgets";
import { Combobox } from "react-widgets";
import './SearchBox.css';
import useSearchBox from "../components/hooks/useSearchBox.js"
import '../index.css'

function SearchBox() {
      const {
        area, setArea, areaOptions,
        propertyType, setPropertyType, propertyOptions,
        addedToSite, setAddedDate, addedOptions,
        minPrice, maxPrice, handlePriceChange, priceOptions,
        minBedrooms, maxBedrooms, handleBedroomChange, minBedroomOptions, maxBedroomOptions,
        handleSearch
      } = useSearchBox();
      
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
                    placeholder="Search by area or postcode" 
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
