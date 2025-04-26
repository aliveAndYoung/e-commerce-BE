const Product = require("../../models/product");
const getProductsByCategory = async (req, res) => {
    try {
        if (!req.params || !req.params.category) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid category",
            });
        }
        const products = await Product.find({ category: req.params.category });
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

module.exports = getProductsByCategory;
