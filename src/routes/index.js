const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('items/list')
});

module.exports = router;