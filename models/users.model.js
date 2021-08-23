const mongoose = require('mongoose');
const { Schema } = mongoose;
const playlistSchema = require('./playlists.model');

const userSchema = Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		minLength: 8,
		required: true,
	},
	history: [
		{
			type: mongoose.Schema.ObjectId,
			ref: 'Video'
		}
	],
	watchLater: [
		{
			type: mongoose.Schema.ObjectId,
			ref: 'Video'
		}
	],
	likedVideos: [
		{
			type: mongoose.Schema.ObjectId,
			ref: 'Video'
		}
	],
	playlists: [ playlistSchema ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;