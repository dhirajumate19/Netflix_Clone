import React, { useState, useEffect } from "react";
import FeaturedMoviesBanner from "./FeaturedMoviesBanner"; // Updated import statement

const Banner = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const apiKey = "0c515d4392f73a9917801bfb67478eff";

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFeaturedMovies(data.results.slice(0, 1)); // Set the first 5 upcoming movies as featured movies
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFeaturedMovies();
  }, [apiKey]);

  return (
    <div style={{ width: "100%" }}>
      <FeaturedMoviesBanner movies={featuredMovies} /> {/* Updated usage */}
    </div>
  );
};

export default Banner;
