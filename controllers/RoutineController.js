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

const updateRoutine = async (req, res) => {
  try {
    let routineId = parseInt(req.params.routine_id)
    let updatedRoutine = await Routine.update(req.body, {
      where: { id: routineId },
      returning: true
    })
    res.send(updatedRoutine)
  } catch (error) {
    throw error
  }
}

const deleteRoutine = async (req, res) => {
  try {
    let routineId = parseInt(req.params.routine_id)
    let deletedRoutine = await Routine.destroy({
      where: { id: routineId }
    })
    res.send(`Routine ${routineId} deleted.`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllRoutines,
  createNewRoutine,
  updateRoutine,
  deleteRoutine
};
