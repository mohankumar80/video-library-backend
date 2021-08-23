const User = require('../models/users.model');

const signupUser = async (req, res) => {
	try {
		const newUser = req.body;
		const NewUser = User(newUser);
		await NewUser.save();
		res.status(200).json({ success: true, user: NewUser })
	} catch(error) {
		res.status(400).json({ success: false, message: 'username already exists!! please try again' })
	}
}

module.exports = signupUser;