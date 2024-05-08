
import React, { useState } from "react";
import axios from "axios";
import "./LogoSearch.css";

const LogoSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post("/search", { searchResults });
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
      
    </div>
  );
};

export default LogoSearch;
