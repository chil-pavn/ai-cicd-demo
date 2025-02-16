const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello AI/CI/CD!'));
module.exports = app;
