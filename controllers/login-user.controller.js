const User = require('../models/users.model');

const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username })
		if(String(user.password) === password) {
			res.status(200).json({ success: true, user })
		} else {
			res.status(400).json({ success: false, message: 'password is incorrect!! please try again' })
		}
	} catch(error) {
		res.status(400).json({ success: false, message: 'user does not exist!! please signup' })
	}
}

module.exports = loginUser;