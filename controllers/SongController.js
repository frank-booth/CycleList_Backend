const { Song } = require("../models");

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.findAll();
    res.send(songs);
  } catch (error) {
    throw error;
  }
};

const getSongById = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.song_id);
    res.send(song);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSongs,
  getSongById,
};
