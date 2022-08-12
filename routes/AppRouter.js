const Router = require('express').Router()

const RiderRouter = require('./RiderRouter')

Router.use('/riders', RiderRouter)

module.exports = Router