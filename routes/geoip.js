const express = require('express');
const router = express.Router();
var geoip = require('geoip-lite');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'geo ip endpoint is working.',
    });
});

router.get('/:ip', (req, res, next) => {
    const ip = req.params.ip;
    var geo = geoip.lookup(ip);
    res.status(200).json({
        ip: ip,
        country: geo.country
    });
});

module.exports = router;
