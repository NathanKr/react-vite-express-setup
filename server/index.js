const express = require("express"),
  PORT = 5000,
  app = express();

app.get("/api/v1", (req, res) => {
  res.send("hello !!!!");
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
