const { Model, DataTypes, literal } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model { }

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    intake_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    in_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
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
      type: DataTypes.STRING,
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
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // Set a default value of 0 for initial likes
    },
    picture: {
      type: DataTypes.STRING,
    },
    sex: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    // freezeTableName: true,
    underscored: true,
    modelName: 'pet',
  }
);

module.exports = Pet;
