
export const getBaseUrl = () => {
  // If running in Jest, BASE_URL can be a global set
  if (typeof BASE_URL !== "undefined") {
    return BASE_URL;
  }

  
  if (typeof window !== "undefined") {
    // GitHub Pages
    return window.location.origin + (import.meta.env?.BASE_URL || "/");
  }

  // Default fallback for anything else 
  return "/";
};
