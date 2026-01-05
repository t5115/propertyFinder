
export const getBaseUrl = () => {
  
  if (typeof BASE_URL !== "undefined") return BASE_URL;

  
  if (typeof window !== "undefined") {
    // For GitHub Pages hard coding path so jest tests work.
    return window.location.origin + "/propertyFinder/";
  }

 // fall back
  return "/";
};
