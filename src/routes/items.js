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
    res.redirect('/items');
});

router.get('/', async (req, res) => {
    const items = await pool.query('SELECT * FROM items');
    console.log(items);
    res.render('items/list', {items});
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM items WHERE ID = ?', [id]);
    res.redirect('/items');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const items = await pool.query('SELECT * FROM items WHERE ID = ?', [id]);
    res.render('items/edit', {item: items[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { model, family, brand, category, subcategory, description, img } = req.body;
    const newItem = {
        model,
        family,
        brand,
        category,
        subcategory,
        description,
        img
    };
    await pool.query('UPDATE items set ? WHERE id = ?', [newItem, id]);
    res.redirect('/items');
});

module.exports = router;