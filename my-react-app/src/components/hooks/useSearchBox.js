import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useSearchBox() {
  const navigate = useNavigate();

  /* Postcode */
  const [area, setArea] = useState("");
  const areaOptions = ["London","Birmingham","Westminster","Orpington","BR6","E15","E12","E16","BR","BR5"];

  /* Property Type */
  const [propertyType, setPropertyType] = useState("Any");
  const propertyOptions = ["Any","House", "Flat", "Studio"];

  /* Date Added */
  const [addedToSite, setAddedDate] = useState("Anytime");
  const addedOptions = ["Last 24 hours","Last 3 days","Last 7 days","Last 28 days"];

  /* Price Range */
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const priceOptions = [
    50000,100000,150000,200000,250000,300000,350000,400000,450000,500000,
    600000,700000,800000,900000,1000000,1250000,1500000,1750000,2000000,
    2500000,3000000,3500000,4000000,4500000,5000000,
    6000000,7000000,8000000,9000000,10000000,12500000,15000000,17500000,20000000,
  ];

  const handlePriceChange = (type, value) => {
    const min = type === "min" ? value : minPrice || 0;
    const max = type === "max" ? value : maxPrice || Infinity;

    if (type === "min") {
      if (value > max) setMinPrice("");
      else setMinPrice(value);
    } else {
      if (min > value) setMaxPrice("");
      else setMaxPrice(value);
    }
  };

  /* Bedrooms */
  const [minBedrooms, setMinBedrooms] = useState("Any");
  const [maxBedrooms, setMaxBedrooms] = useState("Any");
  const minBedroomOptions = ["Any", "1", "2", "3", "4", "5"];
  const maxBedroomOptions = ["Any", "1", "2", "3", "4", "5+"];

  const handleBedroomChange = (type, value) => {
    const min = value === "Any" || (type === "max" && minBedrooms === "Any")
      ? 0
      : Number(type === "min" ? value : minBedrooms);
    const max = value === "Any" || (type === "max" && value === "5+")
      ? Infinity
      : Number(type === "max" ? value : maxBedrooms);

    if (min > max) {
      type === "min" ? setMinBedrooms("Any") : setMaxBedrooms("Any");
      return;
    }

    type === "min" ? setMinBedrooms(value) : setMaxBedrooms(value);
  };

  /* Search Handler */
  const handleSearch = (e) => {
    e.preventDefault();

    if (!area || area.trim() === "") {
      alert("Please enter an area or postcode");
      return;
    }

    const searchCriteria = {
      area,
      propertyType,
      addedToSite,
      minPrice: parseInt(minPrice) || 0,
      maxPrice: parseInt(maxPrice) || Infinity,
      minBedrooms,
      maxBedrooms
    };

    console.log("Search Values:", { searchCriteria });
    navigate("/property", { state: searchCriteria });
  };

  return {
    area, setArea, areaOptions,
    propertyType, setPropertyType, propertyOptions,
    addedToSite, setAddedDate, addedOptions,
    minPrice, maxPrice, handlePriceChange, priceOptions,
    minBedrooms, maxBedrooms, handleBedroomChange, minBedroomOptions, maxBedroomOptions,
    handleSearch
  };
}

export default useSearchBox;