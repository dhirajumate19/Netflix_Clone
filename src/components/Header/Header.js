import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Style from "./Header.module.css";
import avtar from "../../assets/avtar.png";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ setSearchResults }) => {
  const [onSearchResult, setOnSearchResult] = useState([]);
  const apiKey = "0c515d4392f73a9917801bfb67478eff";

  const handleReceivedSearchResults = async (query) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
          query
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await response.json();
      setOnSearchResult(data.results[0]);
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  const handleImageClick = () => {
    setSearchResults("");
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ marginLeft: "20px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
              style={{ width: "120px", height: "auto" }}
              onClick={handleImageClick}
            />
          </Link>
        </Typography>
        <div>
          <SearchBar onSearch={handleReceivedSearchResults} />
        </div>
        <div className={Style.itemDiv}>
          <Link to="/" className={Style.itemLink} onClick={handleImageClick}>
            Home
          </Link>
          <Link to="/" className={Style.itemLink}>
            TV Shows
          </Link>
          <Link to="/" className={Style.itemLink}>
            Movies
          </Link>
          <Link to="/" className={Style.itemLink}>
            My List
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <img
              src={avtar}
              alt="Profile Avatar"
              style={{
                width: "40px",
                height: "auto",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
