const Product = require("../../models/product");

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};
module.exports = deleteProduct;
