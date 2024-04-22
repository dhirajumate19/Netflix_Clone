// SearchResults.js
import React from "react";
import MovieCard from "./Card/MovieCard"; // Import a component to display movie cards
import { Grid, Typography } from "@mui/material";

const SearchResults = ({ results }) => {
  console.log("final resulst", results);
  return (
    <div className="search-results">
      <Typography variant="h2" fontSize={"20px"} gutterBottom>
        Search Results
      </Typography>
      <Grid container spacing={2}>
        {results.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchResults;
