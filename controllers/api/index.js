const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const likeRoutes = require('./likes-routes');

router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/likes', likeRoutes);

module.exports = router;
