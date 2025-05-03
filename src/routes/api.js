const express = require('express');
const routerAPI = express.Router();
const { getUsersAPI, createUserAPI, updateUserAPI, deleteUserAPI,
    postUploadSinglefileAPI, postUploadMultipleFilesAPI,
} = require('../controller/apiController');
const { postCreateCustomer, postCreateArrrayCustomer, getallCustomerAPI, updateCustomerAPI, deleteCustomerAPI, deleteArrayCustomerAPI

} = require('../controller/customerController');
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
module.exports = routerAPI;
