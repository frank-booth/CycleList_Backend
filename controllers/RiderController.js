const { Rider, Song } = require("../models");

//Get all riders
const getAllRiders = async (req, res) => {
  try {
    const riders = await Rider.findAll();
    res.send(riders);
  } catch (error) {
    throw error;
  }
};

//Get rider by id
const getRiderById = async (req, res) => {
  try {
    const rider = await Rider.findByPk(req.params.rider_id, {
      include: [{ model: Song }],
    });
    res.send(rider);
  } catch (error) {
    throw error;
  }
};

//Create rider
const createNewRider = async (req, res) => {
  try {
    let newRider = await Rider.create(req.body);
    res.send(newRider);
  } catch (error) {
    throw error;
  }
};

//Update rider
const updateRider = async (req, res) => {
  try {
    let riderId = parseInt(req.params.rider_id);
    let updatedRider = await Rider.update(req.body, {
      where: { id: riderId },
      returning: true,
    });

    res.send(updatedRider);
  } catch (error) {
    throw error;
  }
};

// Delete a rider
const deleteRider = async (req, res) => {
  try {
    let riderId = parseInt(req.params.rider_id);
    let deletedRider = await Rider.destroy({
      where: { id: riderId },
    });

    res.send(`Rider deleted with id of ${riderId}`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllRiders,
  getRiderById,
  createNewRider,
  updateRider,
  deleteRider,
};
