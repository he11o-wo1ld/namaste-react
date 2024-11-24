import { render, screen } from "@testing-library/react";
import Resturant from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardmock.json"
import "@testing-library/jest-dom";


it("Should render Restarant Card component with props data", () => {
    render(<Resturant resData={MOCK_DATA} />);

    const cardData = screen.getByText("Captain olive");

    expect (cardData).toBeInTheDocument();
});