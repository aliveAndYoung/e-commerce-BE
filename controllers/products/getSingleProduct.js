const Product = require("../../models/product");

const getSingleProduct = async (req, res) => {
    if (!req.params || !req.params.id) {
        return res.status(400).json({
            success: false,
            message: "Please provide a valid product id",
        });
    }
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

module.exports = getSingleProduct;
