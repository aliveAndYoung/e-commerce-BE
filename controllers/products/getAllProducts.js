const Product = require("../../models/product");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            data: products,
        }); 
    } catch (error) {    
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

module.exports = getAllProducts;