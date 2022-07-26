const express = require('express');
const getData = require('./backend/helpers/read')

const app = express();
const port = 3000;

app.get('/', (req:any, res:any) => {
  const dataPath = process.cwd() + "/src/backend/data/test.json";
  const readData = getData(dataPath)

  res.json(readData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});