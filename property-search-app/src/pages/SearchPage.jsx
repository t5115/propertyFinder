/* Page Style */
import "./SearchPage.css";

/* Component CSS */
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";


function SearchPage() {
  return (
    <>
      <Navbar />
      <main>
        <SearchBox/>
      </main>
    </>
  );
}

export default SearchPage;
