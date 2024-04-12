const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);

if (config.env === 'development') {
  router.use('/docs', docsRoute);
}

module.exports = router;
