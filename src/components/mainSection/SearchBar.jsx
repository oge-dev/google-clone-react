import React from 'react';
// Importing the CSS file for styling the SearchBar component
import './SearchBar.css';
// Import Icon component
import Icon from '../icon';
// Import microphone, search and camera icons
import micIcon from '../../assets/icons/mic-icon.svg';
import searchIcon from '../../assets/icons/search-icon.svg';
import cameraIcon from '../../assets/icons/cam-icon.svg';

// Define the SearchBar component
const SearchBar = ({ searchKeyword, setSearchKeyword }) => {
  // Handler for the 'Enter' key press event
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchKeyword(e.target.value); // Update the search keyword when 'Enter' is pressed
    }
  };

  return (
    <div className="search-bar-container">
      {/* Container for the search bar */}
      <div className="search-bar">
        {/* Container for the search icon */}
        <div className="search-icon">
          <Icon src={searchIcon} alt={"Search"} /> {/* Render search icon */}
        </div>
        {/* Input field for the search query */}
        <input type="search" onKeyDown={handleKeyDown} />
        {/*Render microphone and camera icon within its Container */}
        <div className='mic-camera'>
          <Icon src={micIcon} alt={"Mic"} />
          <Icon src={cameraIcon} alt={"Camera"} />
        </div>
      </div>
      {/* Display search keyword if it exists */}
      <div className="search-result">
        {searchKeyword && <p>{searchKeyword}</p>} {/* Show the search keyword inside a paragraph tag */}
      </div>
    </div>
  );
};

export default SearchBar; // Export the SearchBar component for use in other parts of the application
