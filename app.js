const express = require('express');
const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log(`Started server on port: ${port}`);
});

app.use(express.static('.'));