"use strict";
const fs = require('fs');
module.exports = function getData(dataPath, fileEncoding = 'utf-8') {
    const getUsersData = fs.readFileSync(dataPath, fileEncoding);
    return JSON.parse(getUsersData);
};
