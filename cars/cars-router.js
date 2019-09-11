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

    const newCar = req.body

    db('cars')
        .insert(newCar)
        .then(ids => {
            console.log(ids, 'new car id')
            db('cars').where({id: ids[0]})
                .then(newCarEntry => {
                    res.status(201).json(newCarEntry)
                });
        })
        .catch(e => {
            res.status(500).json({error: 'error storing new car in database'})
        })
})

router.put('/:id', (req, res) => {
    const changes = req.body;
    db('cars')
        .where({ id: req.params.id })
        .update(changes)
        .then(count => {
            res.status(200).json({ message: `updated ${count} record` });
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete('/:id', (req, res) => {
    db('cars')
        .where({ id: req.params.id })
        .del()
        .then(count => {
            res.status(200).json({ message: `deleted ${count} records` });
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;