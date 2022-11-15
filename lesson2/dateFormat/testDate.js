const Time = require('./date')

const dt = new Date();
const newDt = Time.dateFormat(dt);
console.log("newDt", newDt);