"use strict";
const express = require('express');
const getData = require('./backend/helpers/read');
const app = express();
const port = 3000;
const dataPath = process.cwd() + "/src/backend/data/test.json";
app.get('/', (req, res) => {
    const data = getData(dataPath);
    res.json(data);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
