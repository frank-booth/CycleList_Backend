const { Song, Rider, Routine } = require('../models')

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.findAll({
      include: [{ model: Rider }, { model: Routine }]
    })
    res.send(songs)
  } catch (error) {
    throw error
  }
}

const getSongById = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.song_id, {
      include: [{ model: Rider }, { model: Routine }]
    })
    res.send(song)
  } catch (error) {
    throw error
  }
}

const createNewSong = async (req, res) => {
  try {
    let riderId = parseInt(req.params.rider_id)
    let newSong = { riderId, ...req.body }
    let song = await Song.create(newSong)
    res.send(song)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllSongs,
  getSongById,
  createNewSong
}
