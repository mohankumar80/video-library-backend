const User = require('../models/users.model');

const getHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('history');
        res.status(200).json({ success: true, history: user.history })
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to retrieve your history' })
    }
}

module.exports = getHistory;