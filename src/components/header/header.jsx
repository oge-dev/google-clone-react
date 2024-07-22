import React from "react";
// Importing CSS file for styling the Header component
import "./header.css";
// Importing SVG icon for notifications, Link and Icon components
import NotificationsIcon from "../../assets/icons/lab.svg";
import Link from "../link";
import Icon from "../icon";

// App component definition
const Header = () => {
  return (
    <div className="header">
      {/* Container for header links */}
      <div className="header-links">
        {/* Render Link component for Gmail and Images with a URL */}
        <Link href={"http://"} text={"Gmail"} />
        <Link href={"http://"} text={"Images"} />
      </div>
      {/* Container for header icons */}
      <div className="header-icons">
        {/* Render Icon component for notifications with the imported SVG, apps and user with a URL for the icon with its Container */}
        <div className="notifi-icon">
          <Icon src={NotificationsIcon} alt={"notifi icon"} />
        </div>
        <div className="apps-icon">
          <Icon src={"https://ssl.gstatic.com/gb/images/bar/al-icon.png"} alt={"apps icon"} />
        </div>
        <div className="user-icon">
          <Icon src={"https://lh3.googleusercontent.com/ogw/AF2bZyiYBsIR0WFf7Q1zOEcrm88eFpj9NFY0UbfslzD6w6vUxWg=s32-c-mo"} alt={"user icon"} />
        </div>
      </div>
    </div>

  );
};

// Exporting the Header component as the default export of this module
export default Header;
