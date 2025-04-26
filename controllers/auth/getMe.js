const users = require("../../models/users");

// @desc    Get current logged in user
// @route   GET /auth/getme
// @access  Private
exports.getMe = async (req, res) => {
    try {
        const user = await users.findById(req.user.id).select("-_id -__v");

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};
