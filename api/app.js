const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const quotes =   require('./quotes.js');
const app = express();
app.use(bodyParser.json());
app.use(cors())


app.get("/quotes", (req, res) => {
res.send(quotes);
});
app.get("/quote/:id", (req, res) => {
res.send(quotes[req.params.id]);
});
app.get("/quotes/random", (req, res) => {
let id = Math.floor(Math.random()*quotes.length);
res.send(quotes[id]);
});

app.listen(8081, () => {
console.log("App's running on port 8081");
});