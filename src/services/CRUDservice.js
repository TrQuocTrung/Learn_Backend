const connection = require('../config/connectDB');
const getAllUsers = async () => {
    let [result, fields] = await connection.query("SELECT * FROM Users");
    return result;
}
const getUserById = async (userId) => {

    let [result, fields] = await connection.query("SELECT * FROM Users WHERE id = ?", [userId]);
    let user = result && result.length > 0 ? result[0] : {};
    return user;
}
const updateUserbyId = async (email, name, city, userId) => {
    let [result, fields] = await connection.query('UPDATE Users SET email = ?, name =? ,City = ? WHERE id = ?', [email, name, city, userId]);
}
module.exports = { getAllUsers, getUserById, updateUserbyId };   