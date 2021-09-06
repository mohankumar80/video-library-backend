const errorHandler = (req, res) => {
    res.status(404).json({ success: false, message: 'the router you are looking for does not exist!!' })
}

module.exports = errorHandler;