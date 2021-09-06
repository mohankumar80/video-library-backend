const User = require('../models/users.model');

const addToWatchLater = async (req, res) => {
    try {
        const { userId } = req.params;
        const { videoId } = req.body;
        const user = await User.findById(userId);
        if(user.watchLater.includes(videoId)) {
            res.status(400).json({ success: false, message: 'video already exist in watch later' })
        } else {
            user.watchLater.push(videoId);
            user.save();
            res.status(200).json({ success: true, watchLater: user.watchLater })
        }
    } catch (error) {
        res.status(200).json({ success: false, message: 'failed to add the video into watch later' })
    }
}

module.exports = addToWatchLater;