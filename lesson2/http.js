
const http = require('http')
const server = http.createServer();

// server.on ("request",function (req,res) {
//   console.log("someone is visting our server");
//   客户端url地址
//   const url = req.url;
//   //客户端请求method
//   const method = req.method;
//   const str = `Your request url is ${url}, and your request method is ${method}`
//   console.log("str", str);

//   // 调用res.end()方法，向客户端响应一些内容

//   // 设置编码格式解决中文乱码问题
//   res.setHeader("Content-Type","text/html; charset=utf-8")

//   res.end(str);
// })

server.on("request", function (req, res) {
  const url = req.url;
  let content = "<h1>404 Not Found</h1>";
  if (url === "/" || url === "/index.html") {
    content = "<h1>main page</h1>";
  } else if (url === "/about.html") {
    content = "<h1>about page</h1>";
  }
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(content);

})

server.listen(8080, function() {
  console.log("server is running on http://127.0.0.1:8080");

})