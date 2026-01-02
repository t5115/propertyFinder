import { useState, useEffect } from "react";

/* Shared favourites list*/
let globalFavourites = [];

/* Stores state setters to notify all components when favourites change */
let listeners = []; 

export default function useFavourites() {
  /* Local state mirrors global*/
  const [favourites, setFavourites] = useState(globalFavourites);

  /*add/remove func*/
  const toggleFavourite = (id) => {
    if (globalFavourites.includes(id)) {
      /* Remove if already favourited */
      globalFavourites = globalFavourites.filter((fid) => fid !== id);
      console.log("Favourite removed:", id);
    } else {
      /* Add if not favourited */
      globalFavourites = [...globalFavourites, id];
      console.log("Favourite added:", id);
    }

    console.log("Updated favourites list:", globalFavourites);
    
    /* Update all subscribed components */
    listeners.forEach((listener) => listener([...globalFavourites]));
  };

  useEffect(() => {
    /* Register this component to receive updates */
    listeners.push(setFavourites);

    return () => {
      /* Cleanup */
      listeners = listeners.filter((l) => l !== setFavourites);
    };
  }, []);

 
  return { favourites, toggleFavourite };
}

export const resetFavouritesForTesting = () => {
  globalFavourites = [];
  listeners = [];
};