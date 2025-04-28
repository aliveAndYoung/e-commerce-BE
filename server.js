const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3030;
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const connectDB = require("./models/dbConnection");
const homeRouter = require("./routes/home");
const authRouter = require("./routes/auth");
const productsRouter = require("./routes/products");
const { protect } = require("./middleware/auth.js");

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// Mount routers

app.use("/", homeRouter);
app.use("/auth", authRouter);
app.use("/products", productsRouter);
app.use((req, res) => res.status(404).send("404 Page not found"));

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
