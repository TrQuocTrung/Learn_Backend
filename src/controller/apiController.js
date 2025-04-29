const User = require('../models/user');
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
    let id = req.params.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await updateOne({ _id: id }, { email: email, name: name, city: city });
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

module.exports = {
    getUsersAPI, createUserAPI, updateUserAPI
}