

function SearchResults({amount}){
    return(
        <div className="search-container">
            Search returned {amount} {amount === 1 ? "property" : "properties"} {/*Takes in number of properties found and displays at top, added ternary so when it says 1 it makes sense gramatically!!*/}
        </div>
    );
}

export default SearchResults