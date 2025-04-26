const Product = require("../../models/product");
const addProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await Product.create(product);
        res.status(200).json({
            success: true,
            message: "Product added successfully",
            data: newProduct,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

module.exports = addProduct;
