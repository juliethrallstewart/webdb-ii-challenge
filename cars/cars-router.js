const express = require('express')
const knex = require('knex')

const db = require('../data/db-config')

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(e => {
            res.status(500).json({error: 'error retrieving cars from database'})
        })
})

router.post('/', (req, res) => {

    const { id } = req.params
    const newCar = req.body

    db('cars')
        .insert(newCar)
        .then(newCar => {
            res.status(201).json(newCar)
        })
        .catch(e => {
            res.status(500).json({error: 'error storing new car in database'})
        })
})


module.exports = router;