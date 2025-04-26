const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const port = process.env.PORT || 3030;
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./models/dbConnection");
const homeRouter = require("./routes/home");
const authRouter = require("./routes/auth");

app.use(express.json());

// Mount routers
app.use("/", homeRouter);
app.use("/auth", authRouter);

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
