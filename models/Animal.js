const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model {}

Animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    animal_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pet_size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    // timestamps: false,
    // freezeTableName: true,
    underscored: true,
    modelName: 'animal',
  }
);

module.exports = Animal;
