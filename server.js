// npm i express cors dotenv axios
// This is the backend js to prevent API Key leakage, the APIkey was stored in the .env file.
// The .env file shouldn't be accessed by others.

const port = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { lstat } = require("fs");
require("dotenv").config();
const APIkey = process.env.APIkey;

const app = express();

// template
// app.get("/", (req, res) => {
//   res.json("index");
// });

app.use(cors());

// Get  data by API key from twelvedata
app.get("/APIkey", (req, res) => {
  let symName = ["AAPL", "MSFT", "TSLA"];
  const options = {
    method: "GET",
    url: `https://api.twelvedata.com/quote?symbol=${symName[0]},${symName[1]},${symName[2]}&interval=1min&apikey=${APIkey}`,
  };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      return err;
    });
});

// server.js
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("submit", (req, res) => {
  const formData = req.body;
  // Process the form data as needed

  // Send a response back to the client
  res.json({ message: "Form data received successfully!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
