const User = require('../models/users.model');

const clearHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        user.history = [];
        user.save();
        res.status(200).json({ success: true, history: user.history })
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to clear the entire history' })
    }
}

module.exports = clearHistory;