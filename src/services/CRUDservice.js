const connection = require('../config/connectDB');
const User = require('../models/user');
const getAllUsers = async () => {
    let [result, fields] = await connection.query("SELECT * FROM Users");
    return result;
}
const getUserById = async (userId) => {
    // let [result, fields] = await connection.query("SELECT * FROM Users WHERE id = ?", [userId]);
    let user = await User.findById(userId).exec();
    return user;
}
const updateUserbyId = async (email, name, city, userId) => {
    // let [result, fields] = await connection.query('UPDATE Users SET email = ?, name =? ,City = ? WHERE id = ?', [email, name, city, userId]);
    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
}
const deleteUserbyId = async (userId) => {
    await User.deleteOne({ _id: userId });
}
module.exports = { getAllUsers, getUserById, updateUserbyId, deleteUserbyId };      