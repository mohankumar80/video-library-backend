const User = require('../models/users.model')

const watchLater = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('watchLater');
        res.status(200).json({ success: true, watchLater: user.watchLater })
    } catch (error) {
        res.status(400).json({ success: false, message: 'failed to retrieve all watch later videos' })
    }
}

module.exports = watchLater;