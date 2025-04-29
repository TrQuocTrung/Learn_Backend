const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, createUserAPI, updateUserAPI } = require('../controller/apiController');
routerAPI.get('/', (req, res) => {
    return res.send('API is running...');
});
routerAPI.get('/home', getUsersAPI);
routerAPI.post('/users', createUserAPI);
routerAPI.put('/users/:id', updateUserAPI);

module.exports = routerAPI;
