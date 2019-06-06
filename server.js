var config = require('./config');
var fs = require("fs");

console.log(config.url);
var content = fs.readFileSync(".kaggle/kaggle.json");
console.log("Output Content : \n"+ content);