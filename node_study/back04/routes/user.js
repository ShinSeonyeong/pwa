const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('user Router 동작');
    res.send("정상");
})

router.get('/aa', (req, res, next) => {
    console.log('user Router aa 동작');
    res.send("정상 aa");
})

module.exports = router;