// Rating.js
import React from "react";
import styles from "./MovieRating.module.css";
import { Box, Typography } from "@mui/material";

const MovieRating = ({ rating }) => {
  return (
    <Box
      bgcolor="#f44336"
      borderRadius={4}
      px={1}
      py={0.5}
      display="inline-block"
    >
      <Typography variant="body2" color="white">
        {rating}
      </Typography>
    </Box>
  );
};

export default MovieRating;
