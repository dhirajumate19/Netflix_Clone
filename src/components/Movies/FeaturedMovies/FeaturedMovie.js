import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import mStyle from "./FeaturedMovie.module.css"; // Import the CSS file

function FeaturedMovie({ movie }) {
  return (
    <Card className={mStyle.featuredmoviebanner}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />
        <CardContent className={mStyle.featuredmoviecontent}>
          <Typography variant="h4" className={mStyle.featuredmovietitle}>
            {movie.title}
          </Typography>
          <Typography variant="body1" className={mStyle.featuredmovieoverview}>
            {movie.overview}
          </Typography>
          <div className={mStyle.featuredmoviebuttons}>
            <Button variant="contained" color="primary">
              Play
            </Button>
            <Button variant="outlined" color="secondary">
              Watch Trailer
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FeaturedMovie;
