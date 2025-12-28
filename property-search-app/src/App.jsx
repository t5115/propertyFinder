import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/property" element={<PropertyPage />} />
    </Routes>
  );
}

export default App;
