const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.status(200).json({success: true, message: "This is test route"})
});

router.post('/create', function(req, res, next){
    res.status(201).json({success:true, user: req.body})
});

module.exports = router;