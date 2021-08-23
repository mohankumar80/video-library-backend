const User = require('../models/users.model');

const deleteLikedVideo = async (req, res) => {
    try {
        const { userId } = req.params;
        const { videoId } = req.body;
        const user = await User.findById(userId);
        user.likedVideos.pull(videoId);
        user.save();
        res.status(200).json({ success: true, likedVideos: user.likedVideos })
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to delete from liked videos' })
    }
}

module.exports = deleteLikedVideo;