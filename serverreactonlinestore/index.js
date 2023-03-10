const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8082;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT,()=>{console.log('Server start'+ PORT)});
const router = require('./rout.js');
router(app);