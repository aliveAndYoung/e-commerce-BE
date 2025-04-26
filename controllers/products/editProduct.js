const Product = require("../../models/product");

const editProduct = async (req, res) => {
    try {
        const product = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            product,
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

module.exports = editProduct;
