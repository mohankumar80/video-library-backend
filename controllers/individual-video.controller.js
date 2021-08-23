const Video = require('../models/videos.model');

const individualVideo = async (req, res) => {
    try {
        const { videoId } = req.params;
        const video = await Video.findById(videoId);
        res.status(200).json({ success: true, video })
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to get the specified video' })
    }
}

module.exports = individualVideo;