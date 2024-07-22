// Importing React library and useState hook for managing state
import React, { useState } from 'react';
// Importing Logo, SearchBar, SearchButtons and LanguageOptions component
import Logo from './Logo.jsx';
import SearchBar from './SearchBar.jsx';
import SearchButtons from './SearchButtons.jsx';
import LanguageOptions from './LanguageOptions.jsx';

// MainSection component definition
const MainSection = () => {
  // Defining a state variable `searchKeyword` and a setter function `setSearchKeyword`
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div>
      {/* Render the Logo component, SearchBar component passing `searchKeyword` and `setSearchKeyword` as props, SearchButtons and LanguageOptions components */}
      <Logo />
      <SearchBar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      <SearchButtons />
      <LanguageOptions />
    </div>
  )
}

// Exporting the MainSection component as the default export of this module
export default MainSection;
