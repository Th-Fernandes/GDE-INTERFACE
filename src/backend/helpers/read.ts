const fs = require('fs')

module.exports = function getData(dataPath:string , fileEncoding:string = 'utf-8') {
  const getUsersData = fs.readFileSync(dataPath, fileEncoding)  
  return JSON.parse(getUsersData)
}
