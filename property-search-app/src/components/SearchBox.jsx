import './SearchBox.css';

function SearchBox() {

    /*Price List for price drop down menu */
    const priceOptions = [
      50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000,
      600000, 700000, 800000, 900000, 1000000, 1250000, 1500000, 1750000, 2000000,
      2500000, 3000000, 3500000, 4000000, 4500000, 5000000,
      6000000, 7000000, 8000000, 9000000, 10000000, 12500000, 15000000, 17500000, 20000000
    ];
    
   return (
    <div className='container'> {/* Parent Container */}
        <h2>Search properties for sale.</h2>

        {/*Buttons Parent*/}
        <form className="search-form">

             {/*Postcode Search Input */}
            <div id="postcode-search-input">
                <p>Area</p>
                  <div className="form-button"> 
                    <input className="form-field"
                        type="search"
                        placeholder="Search by postcode area"/>
                  </div>
            </div>

            {/*Area dropdown input */}
            <div id="property-types-input">
                <p>Property Type</p>
                  <div className="form-button"> 
                    <select className="form-field">
                        <option value="">Select property type</option> 
                        <option value="house">House</option>
                        <option value="flat">Flat</option>
                        <option value="studio">Studio</option>
                    </select>
                  </div>
            </div>
            
            {/*Date added dropdown menu*/}
            <div id="date-added-input">
                <p>Added to site</p>
                  <div className="form-button"> 
                    <select className="form-field">
                        <option value="">Anytime</option> 
                        <option value="house">Last 24 hours</option>
                        <option value="flat">Last 7 days</option>
                        <option value="studio">Last 28 days</option>
                    </select>
                  </div>
            </div>

            {/*Price range input*/}
            <div id="price-range-input">
                <p>Price range</p>
                <div className="price-range-wrapper">
                  <select className="form-field">
                    <option value="">No min £</option>
                    {priceOptions.map(price => (
                      <option key={price} value={price}>£{price.toLocaleString()}</option>
                    ))}
                  </select>
                  <span className="price-separator">–</span>
                  <select className="form-field">
                    <option value="">No max £</option>
                    {priceOptions.map(price => (
                      <option key={price} value={price}>£{price.toLocaleString()}</option>
                    ))}
                  </select>
                </div>
            </div>

            {/*No of bedrooms input*/}
            <div id="bedrooms-input">
              <p>Number of bedrooms</p>
              <div className="form-button">
                <select className="form-field">
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            {/* Search button */}
            <div id="search-button">
                <button type="submit" className='form-field'>Search</button>
            </div>


            
 
        </form>
    </div>
   );
}

export default SearchBox;
