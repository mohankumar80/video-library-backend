const User = require('../models/users.model');

const deleteFromWatchLater = async (req, res) => {
    try {
        const { userId } = req.params;
        const { videoId } = req.body;
        const user = await User.findById(userId);
        user.watchLater.pull(videoId);
        user.save();
        res.status(200).json({ success: true, watchLater: user.watchLater })
    } catch (error) {
        res.status(400).json({ success: true, message: 'failed to delete from watch later' })
    }
}

module.exports = deleteFromWatchLater;