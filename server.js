const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/Home", (req, res) => {
    res.render("index");
})


const server = app.listen(process.env.PORT || 4000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);