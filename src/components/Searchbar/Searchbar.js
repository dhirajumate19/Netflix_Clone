import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    setQuery(""); // Clear the input field after submitting the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            type="text"
            placeholder="Search movies..."
            value={query}
            style={{
              borderColor: "#f00",
              borderRadius: "0",
              backgroundColor: "white",
            }}
            onChange={handleChange}
            size="small"
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: "10px" }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
