const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require ('path');
const cors = require('cors');
const PORT = 9002;

// >>populate database<< //
// const helper = require('../database/helper.js');

const db = require('../database')
const router = require('./router.js')

const app = express();

app.use(morgan('dev'))

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({
  extended : true
}))

app.use('/api', router);

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(PORT, () => {
  console.log('Express is now listening to port:', PORT);
});
