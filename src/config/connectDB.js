require('dotenv').config();
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
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
// Connection URL
const url = process.env.DB_URL_MONGO;
const client = new MongoClient(url);

// Database Name
const dbName = 'tranquoctrung';
const connection = async () => {
    try {
        //Connect by mongoose
        const options = {
            dbName: "tranquoctrung"
        };
        await mongoose.connect(process.env.DB_URL, options);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value === state).label, "to db"); // connected to db


        //Connect by MongoClient
        // await client.connect();
        // console.log('Connected successfully to server');
        // const db = client.db(dbName);
        // const collection = db.collection('customers');
        // const findResult = await collection.find({}).toArray();
        // console.log('Found documents =>', findResult);
    } catch (error) {
        console.log("Error Connection : ", error);
    }
}
module.exports = connection;