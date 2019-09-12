const express = require('express')
const helmet = require('helmet')

//server

const server = express();

// routing
const CarsRouter = require('../cars/cars-router')

// global middleware
server.use(express.json())
server.use(helmet())

server.use('/api/cars', CarsRouter)

module.exports = server;