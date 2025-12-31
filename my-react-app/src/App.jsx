import {Routes, Route } from "react-router-dom"
import SearchPage from './pages/SearchPage'
import PropertyPage from "./pages/PropertyPage"
import PropertyDetails from "./pages/PropertyDetails"
import Navbar from "./components/Navbar"



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage/>}/>
        <Route path="/property" element={<PropertyPage />}/>
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </>
  )
}

export default App
