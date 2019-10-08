const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
//const UserInfo = require('./schema');
const routes = require('./routes/route');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', routes);

const mongoDB = 'mongodb://localhost:27017/mentra';
mongoose.connect(mongoDB, { useNewUrlParser: true }, err => {
    if (err) 
        throw err;
});

/*
app.get('/readGet', ReadController.readGet);

app.get('/createGet',CreateController.createGet);

app.get('/deleteGet', DeleteController.deleteGet);

app.get('/updateGet', UpdateController.updateGet);
*/

app.listen(port, () => console.log('Server started at port 5000'))