const User = require('../models/users.model');

const deleteFromPlaylist = async (req, res) => {
    try {
        const { userId, videoId } = req.params;
        const { playlistName } = req.body;
        const user = await User.findById(userId);
        user.playlists.map(playlist => {
            if(playlist.name === playlistName) {
                return playlist.playlist.pull(videoId)
            }
        })
        user.save()
        res.status(200).json({ success: true, playlists: user.playlists })
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to delete from the specified playlist' })
    }
}

module.exports = deleteFromPlaylist;