const { Song, Routine } = require("../models");

const getAllRoutines = async (req, res) => {
  try {
    const routines = await Routine.findAll();
    res.send(routines);
  } catch (error) {
    throw error;
  }
};

const createNewRoutine = async (req, res) => {
  try {
    let songId = parseInt(req.params.song_id)
    let newRoutine = { songId, ...req.body}
    let routine = await Routine.create(newRoutine)
    res.send(routine)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllRoutines,
  createNewRoutine
};
