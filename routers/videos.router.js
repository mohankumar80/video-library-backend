const express = require('express');
const videosRouter = express.Router();
const getAllVideos = require('../controllers/get-all-videos.controller');
const individualVideo = require('../controllers/individual-video.controller');

videosRouter.route('/')
.get(getAllVideos);

videosRouter.route('/:videoId')
.get(individualVideo)

module.exports = videosRouter;