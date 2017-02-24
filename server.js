//dependencies
var url = require("url");
var fs = require("fs");
var http = require("http");

var PORT = 8080;

// //test
// function handleRequest(request, response) {

//   response.end("Friendfinder Test " + request.url);
// }

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

  console.log("Server listening on: http://localhost:%s", PORT);

});


// function handleRequest(req, res) {

//   // Capturing the url the request is made to.
//   var urlParts = url.parse(req.url);

//   // When we visit different urls, the switch statement call on different functions.
//   switch (urlParts.pathname) {
//     case "/":
//       displayRoot(urlParts.pathname, req, res);
//       break;
//     case "/portfolio":
//       displayPortfolio(urlParts.pathname, req, res);
//       break;
//     case "/edit":
//       console.log("display edit");
//       break;
//     default:
//       display404(urlParts.pathname, req, res);
//   }
// }

// When we visit the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
  var myHTML = "<html>";
  myHTML += "<body><h1>Home Page</h1>";
  myHTML += "<a href='/portfolio'>Portfolio</a>";
  myHTML += "</body></html>";
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
}

// When we visit the "http://localhost:8080/portfolio" path, this function is run.
function displayPortfolio(url, req, res) {
  var myHTML = "<html>";
  myHTML += "<body><h1>My Portfolio</h1>";
  myHTML += "<a href='/'>Go Home</a>";
  myHTML += "</body></html>";
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
}

//page
function handleRequest(req, res) {

// function html(req, res) {

  // Here we use the fs package to read our index.html file
  fs.readFile("index.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });

}


// function htm(response) {
//   response.writeHead(200, {"Content-Type": "text/html"});

//   var count = 0;
//   var handler = function(error, content){
//     count++;
//     if (error){
//       console.log(error);
//     }
//     else{
//       response.write(content);
//     }

//     if (count == 3) {
//       response.end();
//     }
//   }

//   fs.readFile('index.html', handler);
//   fs.readFile('public/home.html', handler);
//   fs.readFile('public/survey.html', handler);
// }


// When we visit any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}

