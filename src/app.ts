const express = require('express');
const getData = require('./backend/helpers/read')
const indexRouter = require(process.cwd() + '/dist/backend/routes/index')

const app = express();
const port = 3000;

app.use('/', indexRouter )

app.listen(port);