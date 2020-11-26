const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path')
const express = require('express')
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
// server.use(router);
server.use('', express.static(path.join(__dirname, 'images/')))

// Avoid CORS issue
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// server.use(jsonServer.rewriter(routes))
server.use(router) 
server.listen(port);