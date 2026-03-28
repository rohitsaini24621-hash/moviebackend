const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/movie", async (req, res) => {
  const movieName = req.query.name;

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=${process.env.API_KEY}`,
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
