// const { Model, DataTypes } = require('sequelize');
// const sequelize = require("../config/connection");

// class Like extends Model {}

// Like.init(
//   {
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//     pet_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "pets",
//         key: "id",
//       },
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       references: {
//         model: "users",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     underscored: true,
//     modelName: "like",
//   }
// );

// module.exports = Like;

const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const Pet = require('./Pet');

class Like extends Model {
  static associate(models) {
    Like.belongsTo(models.Pet, {
      foreignKey: 'pet_id',
      onDelete: 'CASCADE',
    });
  }
}

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
        model: "pets",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
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

Like.afterCreate(async (like) => {
  // Update the likes count in the corresponding Pet model
  const pet = await Pet.findByPk(like.pet_id);
  if (pet) {
    pet.likes += 1;
    await pet.save();
  }
});

module.exports = Like;
