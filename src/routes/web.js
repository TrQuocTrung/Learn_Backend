const express = require('express');
const router = express.Router();
const { getHomepage, postAddUser, getCreatePage, getPageUpdate, postUpdateUser, deleteOne } = require('../controller/homeController');
router.get('/', getHomepage);
router.get('/createPage', getCreatePage);
router.post('/adduser', postAddUser);
router.get('/edit/:id', getPageUpdate)
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', deleteOne)
module.exports = router;
