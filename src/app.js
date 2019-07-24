
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

const app = express();



app.use(bodyParser.json());


app.use('/api', apiRouter);



export default app;
