import React from "react";
import { Grid, Typography } from "@mui/material";
import PopularMovies from "../Movies/PopularMovies/PopularMovies";
import NowPlaying from "../Movies/NowPlaying/NowPlaying";
import style from "./Home.module.css";
import UpcomingMovies from "../Movies/UpcomingMovies/UpcomingMovies";
import TopRatedMovies from "../Movies/TopRatedMovies/TopRatedMovies";
import Banner from "../Movies/FeaturedMovies/Banner";
import SearchResults from "../SearchBar/SearchResults";

const Home = ({ searchResults }) => {
  console.log("home compo", searchResults);
  return (
    <div className={style.container}>
      {searchResults.length === 0 ? (
        <Banner />
      ) : (
        <SearchResults results={searchResults} />
      )}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Now Playing
          </Typography>
          <NowPlaying />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Popular Movies
          </Typography>
          <PopularMovies category="popular" />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Upcoming Movies
          </Typography>
          <UpcomingMovies />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Top Rated Movies
          </Typography>
          <TopRatedMovies />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
