//创建package.jason npm init



//npm i 安装package.json底下所有的包
//npm i 包名称 只安装一个包

//开发需要用，上线后不需要用可以装在devDependency, 比如nodemon
//npm i nodemon -D
//npm i nodemon --save--dev


//导入需要的包
const moment = require("moment");
const dt = moment().format("YYYY-MM-DD HH:mm:ss");
console.log("dt", dt);
