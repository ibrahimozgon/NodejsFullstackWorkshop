const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req);
  console.log(res);
  res.send("Hello World!");
});

app.listen(3000, () => console.log("app started!"));
// app.listen(3000);
