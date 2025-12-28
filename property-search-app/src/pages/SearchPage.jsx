/*Page Style*/
import "./SearchPage.css";

/*Component*/
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
