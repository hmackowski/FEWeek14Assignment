// Importing the React library to create a functional component
import React from "react";

// Importing the logo from the local files
import logo from '../logo.svg';

// Defining a functional component called MainNav
function NavBar (){
  // The component returns a div which contains a navigation bar
  return(
    <div className="nav-container">
      {/* Anchor tag containing an image (logo) which may act as a link to the homepage */}
      <a href="#"><img src={logo} alt="logo" className="Nav-logo"/></a>

      {/* Anchor tags for 'Home' and 'About' sections */}
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
  );
}

// Exporting the MainNav component for use in other modules
export default NavBar;
