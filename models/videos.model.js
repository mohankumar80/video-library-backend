const mongoose = require('mongoose')
const { Schema } = mongoose;

const videoSchema = Schema({
	videoId: {
		type: String,
		required: [true, 'every video has a ID']
	},
	thumbnail: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		required: true
	},
	description: {
		type: String,
		minLength: 15,
		required: [true, 'every video should have a description']
	}
})

const Video = mongoose.model('Video', videoSchema)

module.exports = Video;