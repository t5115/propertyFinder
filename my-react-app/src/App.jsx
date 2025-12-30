import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PropertyPage from "./pages/PropertyPage";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Property listing page (where links live) */}
        <Route path="/properties" element={<PropertyPage />} />

        {/* Property details page (dynamic) */}
        <Route path="/property/:id" element={<PropertyDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
