const express = require('express');
const usersRouter = express.Router();
const { loginUser, signupUser, allLikedVideos, watchLater, 
    getHistory, getPlaylists, postLikedVideo, deleteLikedVideo,
    addToWatchLater, deleteFromWatchLater, addToHistory, deleteFromHistory,
    clearHistory, addPlaylistName, deletePlaylistName, addToPlaylist, deleteFromPlaylist } = require('../controllers/index');

usersRouter.route('/login')
.post(loginUser)

usersRouter.route('/signup')
.post(signupUser)

usersRouter.route('/:userId/liked-videos')
.get(allLikedVideos)
.post(postLikedVideo)
.delete(deleteLikedVideo)

usersRouter.route('/:userId/watch-later')
.get(watchLater)
.post(addToWatchLater)
.delete(deleteFromWatchLater)

usersRouter.route('/:userId/history')
.get(getHistory)
.post(addToHistory)
.delete(deleteFromHistory)

usersRouter.route('/:userId/clear-history')
.delete(clearHistory)

usersRouter.route('/:userId/playlists')
.get(getPlaylists)

usersRouter.route('/:userId/playlist-name')
.post(addPlaylistName)
.delete(deletePlaylistName)

usersRouter.route('/:userId/playlist-name/:videoId')
.post(addToPlaylist)
.delete(deleteFromPlaylist)

module.exports = usersRouter;