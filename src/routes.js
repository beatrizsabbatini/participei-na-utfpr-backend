const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

const Banner = require('./controllers/BannerController');
const About = require('./controllers/AboutController');
const Category = require('./controllers/CategoriesController');
const File = require('./controllers/FileController');

routes.post('/api/banner', upload.single('image'), Banner.create);
routes.post('/api/bannerExistingFile', Banner.createWithExistentFile);
routes.get('/api/banner',  Banner.list);
routes.delete('/api/banner', Banner.delete);
routes.put('/api/banner', Banner.update);

routes.post('/api/about', upload.single('image'), About.create);
routes.get('/api/about', About.list);

routes.post('/api/category', upload.single('image'), Category.create);
routes.post('/api/category/find',Category.find);
routes.get('/api/category', Category.list);

routes.post('/api/searchFiles', File.list)

module.exports = routes;