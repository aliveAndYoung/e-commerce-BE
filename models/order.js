const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    orderStatus: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Order", orderSchema);
