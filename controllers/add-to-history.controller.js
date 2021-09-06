const User = require('../models/users.model');

const addToHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        const { videoId } = req.body;
        const user = await User.findById(userId);
        if(user.history.includes(videoId)) {
            res.status(400).json({ success: false, message: 'video already exists in history' })
        } else {
            user.history.push(videoId);
            user.save();
            res.status(200).json({ success: true, history: user.history })
        }
    } catch (error) {
        res.status(200).json({ success: false, message: 'failed to add the video into history' })
    }
}

module.exports = addToHistory;