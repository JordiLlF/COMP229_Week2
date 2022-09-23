// import third-party nodejd module Connect
const connect = require('connect');

// initiate app-server
const app = connect();

// custom middleware
function helloWorld(req, res, next) {
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
}

// custom middleware
function byeWorld(req, res, next) {
    res.setHeader('Content-Type','text/plain');
    res.end('Goodbye World');
}

// add middleware to connect application

// app.use('/',helloWorld);
app.use('/hello',helloWorld);
app.use('/bye',byeWorld);


//run app
app.listen(3000);

console.log('Server running at http://localhost:3000');
