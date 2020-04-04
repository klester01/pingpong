const express = require('express');
const app = express();

let counter = 0;

app.listen(3000, () => console.log('counter-server listering for increment or decrement'));

app.post('/increment', (req, res) => {
    counter++;
    res.send('Current count increased to:' + counter);
});

app.post('/decrement', (req, res) => {
    counter--;
    res.send('Current count decreased to:' + counter);
});

app.get('/value', (req, res) => {
    res.send('Current value is:' + counter);
});
