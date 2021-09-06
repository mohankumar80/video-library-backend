const User = require('../models/users.model');

const getPlaylists = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('playlists.playlist');
        res.status(200).json({ success: true, playlists: user.playlists })
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to retrieve your playlists' })
    }
}

module.exports = getPlaylists;