module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

    // initialize your migration with your columns field
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    delete_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    }
  },{ timestamps: true });

  //define your realtion here
  User.associate = (models) => {
    // User.hasMany(models.Video, {
    //   foreignKey: 'trainer_id',
    //   as: 'video_trainer',
    // });
  };

  return User;
};
