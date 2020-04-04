const express = require('express');
const app = express();

app.get('/ping', function (req, res, next) {
    console.log('pong')
})

app.listen(3000, function () {
    console.log('ponging on server');
})