const express = require('express');
const router = express.Router();
var geoip = require('geoip-lite');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'geo ip endpoint is working uuhhh',
    });
});

router.get('/:ip', (req, res, next) => {
    const ip = req.params.ip;
    var geo = geoip.lookup(ip);
    res.status(200).json({
        country:geo.country,
        ip:ip,
    });
});

module.exports = router;