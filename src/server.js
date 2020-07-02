const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

const Routes = require('./routes');

app.use(cors());
app.use('/', Routes);

app.listen(port, () => {
    console.log("Rodando na porta " + port);
});

