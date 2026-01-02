import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBox from "../components/SearchBox";
import useSearchBox from "../components/hooks/useSearchBox";

// 1. Mock the custom hook
jest.mock("../components/hooks/useSearchBox");

describe("SearchBox Functionality", () => {
  // Mock functions to track if they are called
  const mockSetArea = jest.fn();
  const mockSetPropertyType = jest.fn();
  const mockHandleSearch = jest.fn((e) => e.preventDefault());

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    // 2. Setup the default return values for the mock hook
    useSearchBox.mockReturnValue({
      area: "",
      setArea: mockSetArea,
      areaOptions: ["London", "Manchester", "BR5"],
      propertyType: "Any",
      setPropertyType: mockSetPropertyType,
      propertyOptions: ["House", "Flat", "Any"],
      addedToSite: "Anytime",
      setAddedDate: jest.fn(),
      addedOptions: ["Anytime", "Last 24h"],
      minPrice: null,
      maxPrice: null,
      handlePriceChange: jest.fn(),
      priceOptions: [100000, 200000],
      minBedrooms: 0,
      maxBedrooms: 0,
      handleBedroomChange: jest.fn(),
      minBedroomOptions: [1, 2],
      maxBedroomOptions: [3, 4],
      handleSearch: mockHandleSearch,
    });
  });

  test("updates area input correctly when typing", () => {
    render(<SearchBox />);
    
    // Find the Combobox input by its placeholder
    const areaInput = screen.getByPlaceholderText(/Search by area or postcode/i);
    
    // Simulate typing
    fireEvent.change(areaInput, { target: { value: "London" } });
    
    // Verify the hook's setter was called with the right value
    expect(mockSetArea).toHaveBeenCalledWith("London");
  });

  test("triggers handleSearch when the search button is clicked", () => {
    render(<SearchBox />);
    
    // Find the Search button
    const searchBtn = screen.getByRole("button", { name: /Search/i });
    
    // Click the button
    fireEvent.click(searchBtn);
    
    // Verify the handleSearch function was executed
    expect(mockHandleSearch).toHaveBeenCalledTimes(1);
  });
});