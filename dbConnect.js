const mongoose = require('mongoose');
require('dotenv').config();

const dbConn = process.env.mongo;
console.log("this is db con string"+dbConn);

const connectToDatabase = async function () {
    console.log(dbConn)
    try {
        await mongoose.connect(dbConn);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase