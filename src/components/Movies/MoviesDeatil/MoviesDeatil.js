import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function MoviesDetails() {
  const { id } = useParams();

  // Dummy movie data
  const movie = {
    id: 1,
    title: "Movie 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "movie1.jpg",
    // Add more movie details as needed
  };

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={movie.imageUrl}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MoviesDetails;
