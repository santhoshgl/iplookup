const express = require('express');
const app = express();

const geoIpRoutes = require('./routes/geoip');

app.use('/geoip', geoIpRoutes);

module.exports = app;