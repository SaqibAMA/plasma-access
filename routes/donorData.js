const express = require('express');
const path = require('path');

module.exports = () => {

    const router = express.Router();

    router.get('/', (request, response) => {
        
        response.sendFile(path.join(__dirname, 'donorData.json'));

    });

    return router;

}