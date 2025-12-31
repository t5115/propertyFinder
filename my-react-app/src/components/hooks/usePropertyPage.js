import { useState } from "react";
import { useLocation } from "react-router-dom";
import propertiesData from "../../../public/properties.json"

function usePropertyPage() {
  const [activeTab, setActiveTab] = useState("properties");

  const location = useLocation();
  const criteria = location.state || {};

  const allProperties = propertiesData.properties;

  /* Filtering logic */
  const filteredProperties = allProperties.filter((item) => {
    const searchArea = (criteria.area || "").toLowerCase();
    const matchesArea = item.location.toLowerCase().includes(searchArea);

    const matchesType = criteria.propertyType === "Any" || item.type === criteria.propertyType;

    const min = parseInt(criteria.minPrice) || 0;
    const max = parseInt(criteria.maxPrice) || Infinity;
    const matchesPrice = item.price >= min && item.price <= max;

    const minBeds = criteria.minBedrooms === "Any" ? 0 : Number(criteria.minBedrooms);
    const maxBeds = ["Any", "5+"].includes(criteria.maxBedrooms) ? Infinity : Number(criteria.maxBedrooms);
    const matchesBedrooms = item.bedrooms >= minBeds && item.bedrooms <= maxBeds;

    let matchesDate = true;
    if (criteria.addedToSite && criteria.addedToSite !== "Anytime") {
      const dateString = `${item.added.month} ${item.added.day}, ${item.added.year}`;
      const propertyDate = new Date(dateString);
      const currentDate = new Date();
      const diffInTime = currentDate.getTime() - propertyDate.getTime();
      const diffInDays = diffInTime / (1000 * 3600 * 24);

      if (criteria.addedToSite === "Last 24 hours") matchesDate = diffInDays <= 1;
      else if (criteria.addedToSite === "Last 3 days") matchesDate = diffInDays <= 3;
      else if (criteria.addedToSite === "Last 7 days") matchesDate = diffInDays <= 7;
      else if (criteria.addedToSite === "Last 28 days") matchesDate = diffInDays <= 28;
    }

    return matchesArea && matchesType && matchesPrice && matchesBedrooms && matchesDate;
  });

  const totalResults = filteredProperties.length;

  return {
    activeTab,
    setActiveTab,
    filteredProperties,
    totalResults
  };
}

export default usePropertyPage;