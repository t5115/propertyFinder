function MobileListSelector({ active, onChange }) {
  return (
    <div className="mobile-tabs">
      <button
        className={active === "properties" ? "active" : ""}
        onClick={() => onChange("properties")}
      >
        Properties
      </button>

      <button
        className={active === "favourites" ? "active" : ""}
        onClick={() => onChange("favourites")}
      >
        Favourites
      </button>
    </div>
  );
}

// export default at the bottom
export default MobileListSelector;
