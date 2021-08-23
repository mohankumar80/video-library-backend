const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const initializeDBConnection = require('./db/db.connect');
const errorHandler = require('./middlewares/error-handler.middleware.js')
const videosRouter = require('./routers/videos.router');
const usersRouter = require('./routers/users.router')

initializeDBConnection();

app.get('/', (req, res) => {
	res.status(200).json({ success: true, message: 'welcome to video library backend' })
})

app.use('/videos', videosRouter);
app.use('/user', usersRouter);

app.all('*', errorHandler)

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
	console.log(`server started on port: ${PORT}`)
})