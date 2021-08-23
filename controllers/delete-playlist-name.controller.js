const User = require('../models/users.model');

const deletePlaylistName = async (req, res) => {
    try {
        const { userId } = req.params;
        const { playlistName } = req.body;
        const user = await User.findById(userId);
        user.playlists.map(playlist => {
            if(playlist.name === playlistName) {
                user.playlists.pull(playlist)
                return
            } return playlist;
        })
        user.save()
        console.log(user.playlists)
        res.status(200).json({ success: true, playlists: user.playlists });
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to delete the playlist name' })
    }
}

module.exports = deletePlaylistName;