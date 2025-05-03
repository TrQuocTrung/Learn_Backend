const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService');
const getUsersAPI = async (req, res) => {
    let result = await User.find({});
    return res.status(200).json(
        {
            errcode: 0,
            data: { result }
        }
    );
}
const createUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await User.create({
        email: email,
        name: name,
        city: city
    });
    return res.status(200).json(
        {
            errcode: 0,
            data: user,
            message: "Create user success"
        }
    );
}
const updateUserAPI = async (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await User.updateOne({ _id: id }, { email: email, name: name, city: city });
    if (!user) {
        return res.status(404).json(
            {
                errcode: 1,
                message: "User not found"
            }
        );
    } else {
        return res.status(200).json(
            {
                errcode: 0,
                data: user,
                message: "Update user success"
            }
        );
    }
}
const deleteUserAPI = async (req, res) => {
    let id = req.body.id;
    let user = await User.deleteOne({ _id: id });
    if (!user) {
        return res.status(404).json(
            {
                errcode: 1,
                message: "User not found"
            }
        );
    } else {
        return res.status(200).json(
            {
                errcode: 0,
                data: user,
                message: "Delete user success"
            }
        );
    }
}
const postUploadSinglefileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    await uploadSingleFile(req.files.image);
}

const postUploadMultipleFilesAPI = async (req, res) => {
    console.log('>>> req.files =', req.files.image);
    if (!req.files.image || Object.keys(req.files.image).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    if (Array.isArray(req.files.image)) {
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json(
            {
                errcode: 0,
                data: result,
                message: "Upload multiple files success"
            }
        );
    } else {
        return await postUploadSinglefileAPI(req, res);
    }

}
module.exports = {
    getUsersAPI, createUserAPI, updateUserAPI, deleteUserAPI, postUploadSinglefileAPI, postUploadMultipleFilesAPI
}