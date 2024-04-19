import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function UpcomingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "0c515d4392f73a9917801bfb67478eff";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <Grid
        container
        spacing={3}
        style={{ display: "flex", flexWrap: "nowrap", padding: "10px" }}
      >
        {movies.map((movie) => (
          <Grid item key={movie.id} style={{ minWidth: "200px" }}>
            <Card style={{ maxWidth: "200px" }}>
              <CardActionArea component={Link} to={`/movie/${movie.id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <Typography variant="subtitle1" align="center" gutterBottom>
                  {movie.title}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UpcomingMovies;
