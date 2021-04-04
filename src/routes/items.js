const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('items/add');
})

router.post('/add', (req, res) => {
    res.send('recieved');
})

module.exports = router;