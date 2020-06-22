const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Yay Node!");
});
app.get("/node", (req, res) => {
  res.send("hello dude");
});
app.get("/codeyourfuture", (req, res) => {
  res.send("how are you doing");
});

app.get("/chocolate", (req, res) => {
  let set = req.query.amount;

  res.send("Mm chocolate : " + set);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
