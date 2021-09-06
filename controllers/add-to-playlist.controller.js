const User = require('../models/users.model');

const addToPlaylist = async (req, res) => {
    try {
        const { userId, videoId } = req.params;
        const { playlistName } = req.body;
        const user = await User.findById(userId);
        user.playlists.map(playlist => {
            if(playlist.name === playlistName) {
                if(playlist.playlist.includes(videoId)) {
                    return res.status(400).json({ success: false, message: 'video already exists in the specified playlist' })
                } else {
                    return playlist.playlist.push(videoId);
                }
            } return playlist;
        })
        user.save()
        res.status(200).json({ success: true, playlists: user.playlists })
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to add to the playlist' })
    }
}

module.exports = addToPlaylist;