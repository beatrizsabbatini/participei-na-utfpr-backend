const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/multer');

const routes = express.Router();

const Banner = require('./controllers/BannerController');
const Activity = require('./controllers/ActivitiesController');
const User = require('./controllers/UsersController');
const File = require('./controllers/FileController');
const Campus = require('./controllers/CampusController');

routes.post('/api/bannerExistingFile', Banner.createWithExistentFile);
routes.get('/api/banner',  Banner.list);
routes.delete('/api/banner', Banner.delete);
routes.put('/api/banner', Banner.update);

routes.post('/activity', Activity.create);
routes.patch('/activities', Activity.update);
routes.get('/activities', Activity.list);
routes.post('/activities', Activity.listByIds);

routes.post('/user', User.create);
routes.patch('/users', multer(uploadConfig).single('file'), User.update);

routes.get('/user',User.find);
routes.get('/users', User.list);

routes.post('/api/searchFiles', File.list)

routes.get('/campuses', Campus.list)
routes.post('/campuses', Campus.create)

module.exports = routes;