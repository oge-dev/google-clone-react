import React from 'react';
 // Importing CSS file for styling the Logo component and Google logo image
import './Logo.css';
import googleLogo from '../../assets/img/google.png';

 // Defining the Logo functional component
const Logo = () => (
  <div className="logo">
    {/* Render an image element with the source set to the imported Google logo */}
    <img src={googleLogo} alt="Google Logo" />
  </div>
);

// Exporting the Logo component as the default export of this module
export default Logo;
