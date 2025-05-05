const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, createUserAPI, updateUserAPI, deleteUserAPI,
    postUploadSinglefileAPI, postUploadMultipleFilesAPI,
} = require('../controller/apiController');
const { postCreateCustomer, postCreateArrrayCustomer, getallCustomerAPI,
    updateCustomerAPI, deleteCustomerAPI, deleteArrayCustomerAPI
} = require('../controller/customerController');

const { createnewProjectAPI, GetProjectAPI, PutProjectAPI, deleteProjectAPI, deleteUserByproject } = require('../controller/projectController');
//Controller Task
const { postTaskAPI, getTaskAPI, putTaskAPI, deleteTaskAPI } = require('../controller/taskController');

routerAPI.get('/', (req, res) => {
    return res.send('API is running...');
});
routerAPI.get('/home', getUsersAPI);
//User API
routerAPI.post('/users', createUserAPI);
routerAPI.put('/users', updateUserAPI);
routerAPI.delete('/users', deleteUserAPI)
//File API
routerAPI.post('/file', postUploadSinglefileAPI);
routerAPI.post('/files', postUploadMultipleFilesAPI);
//Customer API
routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-arr', postCreateArrrayCustomer);
routerAPI.get('/customers', getallCustomerAPI);
routerAPI.put('/customers', updateCustomerAPI);
routerAPI.delete('/customers', deleteCustomerAPI);
routerAPI.delete('/customers-arr', deleteArrayCustomerAPI);
//Project API
routerAPI.post('/projects', createnewProjectAPI);
routerAPI.get('/projects', GetProjectAPI)
routerAPI.put('/projects', PutProjectAPI);
routerAPI.delete('/projects', deleteProjectAPI);
routerAPI.delete('/projects/user', deleteUserByproject)
//Task API
routerAPI.post('/tasks', postTaskAPI);
routerAPI.get('/tasks', getTaskAPI);
routerAPI.put('/tasks', putTaskAPI);
routerAPI.delete('/tasks', deleteTaskAPI);

module.exports = routerAPI;
