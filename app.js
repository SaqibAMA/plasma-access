const express = require('express');
const app = express();

const port = 8080;

const profileRouter = require('./routes/donorData.js');


app.use('/donorData', profileRouter());

app.use('/', express.static('.'));

// app.use('views', '.');
// app.use('view engine', 'html');

app.listen(port, ()=> {
    console.log("Listening on port:", port);
});