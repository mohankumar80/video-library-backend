const User = require('../models/users.model')

const allLikedVideos = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('likedVideos')
        res.status(200).json({ success: true, likedVideos: user.likedVideos })
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to retrieve liked videos' })
    }
}

module.exports = allLikedVideos;