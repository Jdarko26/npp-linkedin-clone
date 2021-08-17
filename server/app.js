const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const crudRouter = require('./routes/crud');
//const cors = require('cors');


dotenv.config();
const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.get('/api', (req, res) => {
    res.send({message:"got it"});
});

  
app.use('/api/crud', crudRouter);



app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res) => {
    res.status(error.status || 500).send({ error: { message: error.message } });
    
});

module.exports = app;