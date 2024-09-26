const fs = require("fs");
const express = require("express");


// fs.copyFileSync(`main.js`, `second.js`);

const app = express();

app.get("/", function (req, res) {
    
    console.log(req);
    console.log(res);
    res.send(`I love candy`);

});


app.listen(3000, function () {
    console.log(`Running on port:3000`);    
});


