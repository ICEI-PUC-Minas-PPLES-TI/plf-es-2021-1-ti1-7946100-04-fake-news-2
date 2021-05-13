require('dotenv').config()

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

var listener =app.listen(process.env.PORT || 80, function() {
    console.log("Listening on port " + listener.address().port);
});