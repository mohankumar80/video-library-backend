const mongoose = require('mongoose');
const { Schema } = mongoose;

const playlistSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	playlist: [
		{
			type: mongoose.Schema.ObjectId,
			ref: 'Video'
		}
	]
})

module.exports = playlistSchema;