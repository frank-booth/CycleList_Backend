const Router = require("express").Router();

const RiderRouter = require("./RiderRouter");
const SongRouter = require("./SongRouter");

Router.use("/riders", RiderRouter);
Router.use("/songs", SongRouter);

module.exports = Router;
