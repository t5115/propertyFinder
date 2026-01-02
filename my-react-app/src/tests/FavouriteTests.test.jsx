import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Import the reset function you just added
import { resetFavouritesForTesting } from "../components/hooks/useFavourites.js"
import PropertyPanel from "../components/PropertyPanel";
import FavouritePanel from "../components/FavouritePanel";

jest.mock("../assets/houseTemplate1.jpg", () => "houseTemplate.jpg");
jest.mock("../assets/heart.svg", () => "heart.svg");

const mockProperty = {
  id: "prop1",
  price: 750000,
  location: "Petts Wood Road",
  bedrooms: 3,
  type: "House",
  tenure: "Freehold",
  description: "Test description",
  added: { month: "October", day: 12, year: 2025 },
  picture: ["/images/prop1/1.jpg"],
};

describe("Favourites Functionality", () => {
  
  beforeEach(() => {
    // 1. Wipe global state clean
    resetFavouritesForTesting(); 
    
    // 2. Render fresh components
    render(
      <MemoryRouter>
        <PropertyPanel property={mockProperty} />
        <FavouritePanel />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test("should add property to favourites when main heart is clicked", () => {
    const mainBtn = screen.getByTestId("main-fav-btn");
    
    // Check initial state
    expect(mainBtn).not.toHaveClass("favourited");
    expect(screen.getByText(/No favourites yet!/i)).toBeInTheDocument();

    // Click it
    fireEvent.click(mainBtn);
    
    // Verify it's favourited in the main panel
    expect(mainBtn).toHaveClass("favourited");
    
    // Verify it appeared in the list
    expect(screen.getByTestId("list-fav-btn")).toBeInTheDocument();
    expect(screen.queryByText(/No favourites yet!/i)).not.toBeInTheDocument();
  });

  test("should remove property from favourites when main heart is clicked again", () => {
    const mainBtn = screen.getByTestId("main-fav-btn");

    // 1. Setup: Click once to add
    fireEvent.click(mainBtn);
    expect(mainBtn).toHaveClass("favourited");

    // 2. Action: Click again to remove
    fireEvent.click(mainBtn);

    // 3. Verify
    expect(mainBtn).not.toHaveClass("favourited");
    // This button should be gone now because the list is empty
    expect(screen.queryByTestId("list-fav-btn")).not.toBeInTheDocument();
    expect(screen.getByText(/No favourites yet!/i)).toBeInTheDocument();
  });

  test("should remove all properties when 'Remove all' button is clicked", () => {
    // 1. Create a second property just for this test
    const mockProperty2 = { ...mockProperty, id: "prop2", location: "Different Road" };
    
    // 2. Render the second property (since beforeEach only rendered the first one)
    render(
      <MemoryRouter>
        <PropertyPanel property={mockProperty2} />
      </MemoryRouter>
    );

    // 3. Find both main buttons and click them
    const mainBtns = screen.getAllByTestId("main-fav-btn");
    fireEvent.click(mainBtns[0]); // Favourite prop1
    fireEvent.click(mainBtns[1]); // Favourite prop2

    // 4. Verify both are in the Favourite Panel
    const listBtns = screen.getAllByTestId("list-fav-btn");
    expect(listBtns).toHaveLength(2);

    // 5. Action: Click the "Remove all" button
    const removeAllBtn = screen.getByRole("button", { name: /remove all/i });
    fireEvent.click(removeAllBtn);

    // 6. Verify final state
    expect(screen.getByText(/No favourites yet!/i)).toBeInTheDocument();
    expect(screen.queryAllByTestId("list-fav-btn")).toHaveLength(0);
    
    // 7. Verify main hearts reverted
    mainBtns.forEach(btn => expect(btn).not.toHaveClass("favourited"));
  });
  
});