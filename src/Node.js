const express = require("express");
const request = require("request");

const app = express();

app.use("/", (req, res) => {
  const url = "https://www.vegrecipesofindia.com/";
  req.pipe(request(url)).pipe(res);
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
