const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Like extends Model {}

Like.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pet",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "like",
  }
);

module.exports = Like;
