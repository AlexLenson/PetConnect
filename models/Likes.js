const { Model, DataTypes, literal } = require('sequelize');
const sequelize = require('../config/connection');

class Like extends Model { }

Like.init(
    {
      pet_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pet',
            key: 'id'
        }
      },
      user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }

      }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'pet',
      }
);