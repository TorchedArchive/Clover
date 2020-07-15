const clover = require("./index")
const options = clover("--greeting Hello -s")
console.log(options)
console.log(clover.isEmpty(options.g))