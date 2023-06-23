require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/items', router);

app.use(express.static(path.join(__dirname, '../temp')));

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server is listening at http://localhost:${PORT}`);