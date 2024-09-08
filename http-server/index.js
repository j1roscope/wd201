const http = require("http"); // Change to 'http' instead of 'http-server'
const fs = require("fs");

console.log("starting server");
let HomeContent = '';
let ProjectContent = '';
let registeration = '';

// Reading the HTML files asynchronously
fs.readFile("./home.html", (err, home) => {
    if (err) {
        throw err;
    }
    HomeContent = home;
});

fs.readFile("./project.html", (error, project) => {
    if (error) {
        throw error;
    }
    ProjectContent = project;
});

fs.readFile("./registration.html", (error, regi) => {
    if (error) {
        throw error;
    }
    registeration = regi;
});

// Creating the HTTP server
http.createServer((request, response) => {
    let url = request.url;
    

    switch (url) {
        case '/':
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(HomeContent);
            break;
        case '/project':
            response.writeHead(200, { "Content-Type": "text/html" });
            console.log("Project called");
            response.write(ProjectContent);
            break;
        case '/register':
            response.writeHead(200, { "Content-Type": "text/html" });
            console.log("Register called");
            response.write(registeration);
            break;
    }
    response.end();
}).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
