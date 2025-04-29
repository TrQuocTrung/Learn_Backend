require('dotenv').config();
const mongoose = require('mongoose');
// const mysql = require('mysql2');
// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });
const dbState = [
    { value: 0, label: "disconnected" },
    { value: 1, label: "connected success" },
    { value: 2, label: "connecting" },
    { value: 3, label: "disconnecting" }
];
const connection = async () => {
    try {
        const options = {
            dbName: "tranquoctrung"
        };
        await mongoose.connect(process.env.DB_URL, options);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value === state).label, "to db"); // connected to db
    } catch (error) {
        console.log("Error Connection : ", error);
    }
}
module.exports = connection;