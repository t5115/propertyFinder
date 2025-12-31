

function SearchResults({amount}){
    return(
        <div className="search-container">
            <p>Searched returned {amount} propertie(s)</p> {/*Takes in number of properties found and displays at top*/}
        </div>
    );
}

export default SearchResults