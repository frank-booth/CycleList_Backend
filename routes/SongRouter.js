const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.get('/', controller.getAllSongs)
Router.get('/:song_id', controller.getSongById)
Router.post('/:rider_id', controller.createNewSong)

module.exports = Router
