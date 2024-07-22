import React from 'react';
// Importing the CSS file for styling the SearchButtons component and Buttons component from a relative path
import './SearchButtons.css';
import Buttons from "../buttons.jsx";

// SearchButtons component definition
const SearchButtons = () => (
  // Div container with className 'search-buttons' for styling
  <div className="search-buttons">
    {/* Rendering two Buttons components with different text props */}
    <Buttons type={'submit'} text={"Google Search"} />
    <Buttons type={'submit'} text={"I'm Feeling Lucky"} />
  </div>
);

// Exporting the SearchButtons component as the default export
export default SearchButtons;
