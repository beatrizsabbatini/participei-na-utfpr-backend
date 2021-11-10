const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

const Banner = require('./controllers/BannerController');
const Activity = require('./controllers/ActivitiesController');
const User = require('./controllers/UsersController');
const File = require('./controllers/FileController');

routes.post('/api/banner', upload.single('image'), Banner.create);
routes.post('/api/bannerExistingFile', Banner.createWithExistentFile);
routes.get('/api/banner',  Banner.list);
routes.delete('/api/banner', Banner.delete);
routes.put('/api/banner', Banner.update);


routes.post('/activity', Activity.create);
routes.get('/activities', Activity.list);

routes.post('/user', User.create);
routes.get('/user',User.find);
routes.get('/users', User.list);

routes.post('/api/searchFiles', File.list)

module.exports = routes;