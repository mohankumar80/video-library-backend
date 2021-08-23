const Video = require('../models/videos.model')

const getAllVideos = async (req, res) => {
	try {
		const videos = await Video.find({});
		res.status(200).json({ success: true, videos });
	} catch (error){
		res.status(400).json({ success: true, message: 'cannot retrieve all videos' })
	}
}

module.exports = getAllVideos;