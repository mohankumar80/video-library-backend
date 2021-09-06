const User = require('../models/users.model');

const deleteFromHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        const { videoId } = req.body;
        const user = await User.findById(userId);
        user.history.pull(videoId);
        user.save();
        res.status(200).json({ success: true, history: user.history })
    } catch (error) {
        res.status(400).json({ success: true, message: 'failed to delete from history' })
    }
}

module.exports = deleteFromHistory;