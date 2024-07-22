import React from 'react';
 // Importing the Link component, CSS file for styling the Footer component, Icon component and climate icon image
import Link from "../link";
import './footer.css';
import Icon from '../icon'; 
import ClimateIcon from "../../assets/icons/leaf.png";

  // Defining the Footer functional component
const Footer = () => (
  <div className="footer">
    {/* Container for country information */}
    <div className="footer-country">Nigeria</div>
    
    {/* Container for climate action message with an icon */}
    <div className="footer-climate">
      {/* Render Icon component for climate action with the imported image */}
      <Icon src={ClimateIcon} alt={"Climate Icon"} />
      {/* Text next to the climate icon */}
      <span>Our third decade of climate action: join us</span>
    </div>
    
    {/* Container for footer links and policy information */}
    <div className="footer-links-policy">
      {/* Container for general footer links */}
      <div className="footer-links">
        {/* Render Link component for various footer sections */}
        <Link href={"http://"} text={"About"} />
        <Link href={"http://"} text={"Advertising"} />
        <Link href={"http://"} text={"Business"} />
        <Link href={"http://"} text={"How Search works"} />
      </div>
      
      {/* Container for footer policy links */}
      <div className="footer-policy">
        {/* Render Link component for privacy, terms, and settings */}
        <Link href={"http://"} text={"Privacy"} />
        <Link href={"http://"} text={"Terms"} />
        <Link href={"http://"} text={"Settings"} />
      </div>
    </div>
  </div>
);

// Exporting the Footer component as the default export of this module
export default Footer;
