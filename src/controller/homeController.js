const connection = require('../config/connectDB');
const { getAllUsers, getUserById, updateUserbyId } = require('../services/CRUDservice');
const getHomepage = async (req, res) => {
    let result = await getAllUsers();
    res.render('sample.ejs', { dataUser: result });
}
const postAddUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let sqlInsert = `INSERT INTO Users (email, name, city) VALUES(?,?,?)`;
    if (!email || !name || !city) {
        return res.status(400).send("Missing required fields");
    }
    // connection.query(sqlInsert, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         return res.status(500).send("Error inserting data into database");
    //     }
    //     return res.status(200).send("User added successfully");
    // });
    let [result, fields] = await connection.query(sqlInsert, [email, name, city]);
    console.log("checkresult", result);
    console.log("CheckBody", req.body);
    res.send("User added successfully");
}
const getCreatePage = (req, res) => {
    return res.render('createUser.ejs');
}
const getPageUpdate = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    return res.render('edit.ejs', { user_edit: user });
}
const postUpdateUser = async (req, res) => {
    await updateUserbyId(req.body.email, req.body.name, req.body.city, req.body.id);
    res.send("User updated successfully");
}
module.exports = { getHomepage, postAddUser, getCreatePage, getPageUpdate, postUpdateUser };