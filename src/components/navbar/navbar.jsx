import React, { useState } from "react";
import "./navbar.scss";

const Navbar = ({ handleSearch }) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">Romantic Comedy</span>
        </div>
        <div className="search">
          {open && (
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search here.."
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
          )}
          <img
            onClick={() => setOpen(!open)}
            src="./img/search.png"
            alt="search-icon"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
