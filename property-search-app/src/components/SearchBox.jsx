import './SearchBox.css';

function SearchBox() {
   return (
    <div className='container'>
        <h2>Search properties for sale.</h2>
        <form className="search-form">

            <div id="postcode-search-input">
                <p>Area</p>
                  <div className="form-button"> 
                    <input className="form-field"
                        type="search"
                        placeholder="Search by postcode area"/>
                  </div>
            </div>

            <div id="property-types-input">
                <p>Area</p>
                  <div className="form-button"> 
                    <select className="form-field">
                        <option value="">Select property type</option> 
                        <option value="house">House</option>
                        <option value="flat">Flat</option>
                        <option value="studio">Studio</option>
                    </select>
                  </div>
            </div>
            
            
        </form>
    </div>
   );
}

export default SearchBox;
