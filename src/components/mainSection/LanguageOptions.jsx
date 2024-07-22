import React from 'react';
// Importing the Link component and CSS file for styling the LanguageOptions component
import Link from "../link";
import './LanguageOptions.css';

  // Defining the LanguageOptions functional component
const LanguageOptions = () => (
  <div className="language-options">
    {/* Container for language options */}
    <p>Google offered in:
      {/* Render multiple Link components with different text and URLs */}
      <Link href={"http://"} text={"Hausa"} />
      <Link href={"http://"} text={"Igbo"} />
      <Link href={"http://"} text={"Èdè Yorùbá"} />
      <Link href={"http://"} text={"Nigerian Pidgin"} />
    </p>
  </div>
);

// Exporting the LanguageOptions component as the default export of this module
export default LanguageOptions;
