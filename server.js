const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(__dirname + '/public'));

app.listen(8000);
console.log("Running server at port 8000");
