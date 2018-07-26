const express = require('express');
const app = express();

const geoIpRoutes = require('./routes/geoip');

app.use('/v1/geoip', geoIpRoutes);

module.exports = app;