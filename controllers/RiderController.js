const { Rider, Song } = require('../models')

const getAllRiders = async (req, res) => {
    try{
        const riders = await Rider.findAll()
        res.send(riders)
    } catch (error) {
        throw error
    }
}

const getRiderById = async (req, res) => {
    try{
        const rider = await Rider.findByPk(req.params.rider_id, {
            include:[{ model: Song }]
        })
        res.send(rider)
    } catch (error) {
        throw error
    }
}

const createNewRider = async (req, res) => {
    try{
        let newRider = await Rider.create(req.body)
        res.send(newRider)
    } catch (error){
        throw error
    }
}

module.exports = {
    getAllRiders,
    getRiderById,
    createNewRider
}