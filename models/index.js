const User = require('./User');
const Pet = require('./Pet');
const Like = require('./Like')

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pet.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Pet, Like };
