// FeaturedMoviesBanner.js
import React from "react";
import { Box } from "@mui/material";
import FeaturedMovie from "./FeaturedMovie";
import mStyle from "./FeaturedMoviesBanner.module.css";

function FeaturedMoviesBanner({ movies }) {
  return (
    <div className={mStyle.featuredmoviescontainer}>
      <div className={mStyle.featuredmovieswrapper}>
        {movies.map((movie) => (
          <Box key={movie.id} className={mStyle.featuredmovieitem}>
            <FeaturedMovie movie={movie} />
          </Box>
        ))}
      </div>
    </div>
  );
}

export default FeaturedMoviesBanner;
