const Router = require("express").Router();

const RiderRouter = require("./RiderRouter");
const SongRouter = require("./SongRouter");
const RoutineRouter = require("./RoutineRouter")

Router.use("/riders", RiderRouter);
Router.use("/songs", SongRouter);
Router.use("/routines", RoutineRouter)

module.exports = Router;
