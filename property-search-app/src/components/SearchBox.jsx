import './SearchBox.css';

function SearchBox() {
   return (
    <div className='container'>
        <h2>Search properties for sale.</h2>
        <form className="search-form">

            <div className="postcode-search-input">
              <p>Area</p>
              <input
                type="search"
                placeholder="Search by postcode area"
              />
              <button type="submit">Search</button>
            </div>

            

           

          
        </form>
    </div>
   );
}

export default SearchBox;
