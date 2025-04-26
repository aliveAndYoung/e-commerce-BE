const mongoose = require("mongoose");

const connectDB = async (uri) => {
    try {
        // Connect to MongoDB
        const conn = await mongoose.connect(uri);

        // Log successful connection
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        // Don't exit immediately, let the application handle the error
        throw error;
    }
};

module.exports = connectDB;
