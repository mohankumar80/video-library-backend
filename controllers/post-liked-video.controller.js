const User = require('../models/users.model');

const postLikedVideo = async (req, res) => {
    try {
        const { userId } = req.params;
        const { videoId } = req.body;
        const user = await User.findById(userId);
        if(user.likedVideos.includes(videoId)) {
            res.status(400).json({ success: false, message: 'video already exists in liked videos' })
        } else {
            user.likedVideos.push(videoId)
            user.save();
            res.status(200).json({ success: true, likedVideos: user.likedVideos })
        }
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to post the liked video' })
    }
}

module.exports = postLikedVideo