const sequelize = require('../config/connection');
const { User, Animal } = require('../models');

const userData = require('./userData.json');
const animalData = require('./animalData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const animals = await Animal.bulkCreate(animalData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
