// MovieCard.js
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styles from "./Movie.module.css";

const MovieCard = ({ movie }) => {
  return (
    <Card className={styles.movieCard}>
      <CardMedia
        component="img"
        height="200"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent className={styles.movieDetails}>
        <Typography variant="h6" component="h3" gutterBottom>
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          Release Date: {movie.release_date}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Overview: {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
