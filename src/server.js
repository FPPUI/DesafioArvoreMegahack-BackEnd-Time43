const express = require('express');

const app = express();
const port = 8000;

const Routes = require('./routes');

app.use('/', Routes);

app.listen(port);

