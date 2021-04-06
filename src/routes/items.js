const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('items/add');
});

router.post('/add', async (req, res) => {
    const {model, family, brand, category, subcategory, description, img} = req.body;
    const newItem = {
        model,
        family,
        brand,
        category,
        subcategory,
        description,
        img
    };
    await pool.query('INSERT INTO items set ?', [newItem]);
    res.send('recieved');
});

router.get('/', async (req, res) => {
    const items = await pool.query('SELECT * FROM items');
    console.log(items);
    res.render('items/list', {items});
});

module.exports = router;