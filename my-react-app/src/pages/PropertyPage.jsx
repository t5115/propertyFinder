import SearchResults from "../components/SearchResults";
import PropertyPanel from "../components/PropertyPanel";
import FavouritePanel from "../components/FavouritePanel";
import MobileListSelector from "../components/MobileListSelector";
import usePropertyPage from "../components/hooks/usePropertyPage";
import useFavourites from "../components/hooks/useFavourites";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import "../components/SearchResults.css";
import "../components/PropertyPanel.css";
import "../components/FavouritePanel.css";
import "../pages/PropertyPage.css";

function PropertyPage() {
  const { activeTab, setActiveTab, filteredProperties, totalResults } = usePropertyPage();
  const { favourites, toggleFavourite } = useFavourites();

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    /* Property → Favourites */
    if (destination.droppableId === "favourites" && source.droppableId === "properties") {
      toggleFavourite(draggableId);
    }

    /* Favourites → Properties (unsave) */
    if (destination.droppableId === "properties" && source.droppableId === "favourites") {
      toggleFavourite(draggableId);
    }
  };

  const renderPropertyList = () => (
    <>
      {filteredProperties.length > 0 ? (
        filteredProperties.map((item) => (
          <PropertyPanel key={item.id} property={item} />
        ))
      ) : (
        <div className="no-results">
          <h3>No properties found</h3>
          <p>Try adjusting your filters to find more results.</p>
        </div>
      )}
    </>
  );

  return (
    <>
      <SearchResults amount={totalResults} />

      {/* Mobile selector */}
      <MobileListSelector active={activeTab} onChange={setActiveTab} />

      {/* Desktop layout */}
      <div className="panels-container desktop-layout">
        <div className="property-container">{renderPropertyList()}</div>
        <FavouritePanel />
      </div>

      {/* Mobile layout */}
      <div className="mobile-layout">
        {activeTab === "properties" && (
          <div className="property-container">{renderPropertyList()}</div>
        )}
        {activeTab === "favourites" && <FavouritePanel />}
      </div>
    </>
  );
}

export default PropertyPage;
