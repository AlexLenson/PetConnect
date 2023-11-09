const sequelize = require('../config/connection');
const { User, Pet, Like } = require('../models');

const userData = require('./userData.json');
const petData = require('./petData.json');
const likeData = require('./likes.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const pets = await Pet.bulkCreate(petData, {
    individualHooks: true,
    returning: true,
  });

  const likes = await Like.bulkCreate(likeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
