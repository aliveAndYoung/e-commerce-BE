const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
        type: String,
        required: true,
        enum: ["shirts", "pants", "hoodies", "sweatshirts"],
    },
    stock: { type: Number, required: true  , default: 1},
});
module.exports = mongoose.model("Product", productSchema);
