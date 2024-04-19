import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Style from "./Header.module.css";
import avtar from "../../assets/avtar.png";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ marginLeft: "20px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
              style={{ width: "120px", height: "auto" }}
            />
          </Link>
        </Typography>
        <div className={Style.itemDiv}>
          <Link to="/browse" className={Style.itemLink}>
            Home
          </Link>
          <Link to="/browse/tv" className={Style.itemLink}>
            TV Shows
          </Link>
          <Link to="/browse/movies" className={Style.itemLink}>
            Movies
          </Link>
          <Link to="/browse/my-list" className={Style.itemLink}>
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
}

export default Header;
