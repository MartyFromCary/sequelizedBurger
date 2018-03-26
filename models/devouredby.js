module.exports = (sequelize, DataTypes) => {
  var DevouredBy = sequelize.define(
    "DevouredBy",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: false, freezeTableName: true }
  );

  DevouredBy.associate = models => DevouredBy.hasMany(models.Burger);

  return DevouredBy;
};
