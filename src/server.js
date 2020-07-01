const express = require('express');

const app = express();
const port = 8000;

app.use('/', (req, res) => {

    return res.send('Olá')
})

app.listen(port);

