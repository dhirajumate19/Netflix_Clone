import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  console.log("APp Search", searchResults);
  return (
    <BrowserRouter>
      <div>
        <Header setSearchResults={setSearchResults} />

        <Routes>
          <Route path="/" element={<Home searchResults={searchResults} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
