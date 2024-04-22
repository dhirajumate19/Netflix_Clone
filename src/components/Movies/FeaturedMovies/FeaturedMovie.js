import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import styles from "./FeaturedMovie.module.css"; // Import the CSS file
import MovieRating from "./MovieRating";

function FeaturedMovie({ movie }) {
  return (
    <Card className={styles.featuredMovie}>
      <CardMedia
        component="img"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
        className={styles.featuredMovieImage}
      />
      <CardContent className={styles.overlay}>
        {" "}
        {/* Apply custom class name */}
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.overview}
        >
          {movie.overview}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.overview}
        >
          <MovieRating rating={movie.rating} />
        </Typography>
        <Grid container spacing={2} className={styles.buttonsContainer}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={styles.playButton}
            >
              Play
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={styles.watchTrailerButton}
            >
              Watch Trailer
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default FeaturedMovie;
