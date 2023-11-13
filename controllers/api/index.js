const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const likeRoutes = require('./likes-routes');
const profileRoutes = require('./profileRoutes');

router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/likes', likeRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
