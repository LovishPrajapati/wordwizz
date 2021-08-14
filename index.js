const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
var axios = require("axios").default;
const app = express();
require("dotenv").config();
app.use(bodyparser.json());
app.use(cors());

app.post("/", (req, res) => {
  const { sword } = req.body;
  var options = {
    method: "GET",
    url: process.env.URL,
    params: { term: `${sword}` },
    headers: {
      "x-rapidapi-key": process.env.KEY,
      "x-rapidapi-host": process.env.HOST,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.listen(process.env.PORT || 5000, () => {
  console.log("Server up and running..!!");
});
