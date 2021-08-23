const User = require('../models/users.model');

const addPlaylistName = async (req, res) => {
    try {
        const { userId } = req.params;
        const { playlistName } = req.body;
        const user = await User.findById(userId);
        const videoIndex = user.playlists.findIndex(playlist => playlist.name === playlistName)
        if(videoIndex !== -1) {
            res.status(400).json({ success: false, message: 'playlist name already exists' });
        } else {
            user.playlists.push({ name: playlistName });
            await user.save()
            res.status(200).json({ success: true, playlists: user.playlists })
        }
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to add playlist name to the database' });
    }
}

module.exports = addPlaylistName;