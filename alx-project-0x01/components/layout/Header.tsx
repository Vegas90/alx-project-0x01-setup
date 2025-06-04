// create a functional component that renders the header content, including search bar, sign and sign up , Types of accommodation (e.g. Rooms, Mansion, Countryside, etc.) and a logo.
import React from "react";

// Header component that displays the site logo, search bar, navigation, and authentication buttons.
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      {/* Logo Section */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          {/* Replace with your logo */}
          <span className="font-bold text-xl">MyListingApp</span>
        </div>
        {/* Navigation for accommodation types */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700">Rooms</a>
          <a href="#" className="text-gray-700">Mansion</a>
          <a href="#" className="text-gray-700">Countryside</a>
          {/* Add more categories as needed */}
        </nav>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search properties..."
          className="border rounded px-2 py-1"
        />
        {/* Auth Buttons */}
        <div className="space-x-2">
          <button className="text-blue-600">Sign In</button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
