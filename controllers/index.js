const loginUser = require('./login-user.controller');
const signupUser = require('./signup-user.controller');
const allLikedVideos = require('./all-liked-videos.controller');
const watchLater = require('./watch-later.controller');
const getHistory = require('./history.controller');
const getPlaylists = require('./playlists.controller');
const postLikedVideo = require('./post-liked-video.controller');
const deleteLikedVideo = require('./delete-liked-video.controller');
const addToWatchLater = require('./add-to-watch-later.controller');
const deleteFromWatchLater = require('./delete-from-watch-later.controller');
const addToHistory = require('./add-to-history.controller');
const deleteFromHistory = require('./delete-from-history.controller');
const clearHistory = require('./clear-history.controller');
const addPlaylistName = require('./add-playlist-name.controller');
const deletePlaylistName = require('./delete-playlist-name.controller');
const addToPlaylist = require('./add-to-playlist.controller');
const deleteFromPlaylist = require('./delete-from-playlist.controller');

module.exports = { loginUser, signupUser, allLikedVideos, watchLater, getHistory, 
    getPlaylists, postLikedVideo, deleteLikedVideo, addToWatchLater, deleteFromWatchLater,
    addToHistory, deleteFromHistory, clearHistory, addPlaylistName, deletePlaylistName, 
    addToPlaylist, deleteFromPlaylist };