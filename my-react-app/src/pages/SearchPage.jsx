/*Page Style*/
import "./SearchPage.css";

/*Component*/
import SearchBox from "../components/SearchBox";
import FavouritePanel from "../components/FavouritePanel"


function SearchPage() {
  return (
    <>
      <main>
        <SearchBox/>
        <div className="search-page-fav-panel">
          <FavouritePanel/>
        </div>
        
      </main>
    </>
  );
}

export default SearchPage;
