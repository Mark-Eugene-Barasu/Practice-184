// jshint esversion:6

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// const express = require("express");
import express from "express";

// const bodyParser = require("body-parser");
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // to post nested objects


app.get("/", function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function (req, res) {
    console.log(req.body);
    res.send(`<h2>Welcome, ${req.body.firstName} ${req.body.middleName} ${req.body.lastName}.</h2> <br> We believe <a href="mailto:mark0630227248@gmail.com">${req.body.userEmail}</a> is your email address.`);
})


app.listen(3000, () => {
        console.log(`Running on port:3000`);
    });


