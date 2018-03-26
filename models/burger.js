module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define(
    "Burger",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    { timestamps: false, freezeTableName: true }
  );

  Burger.associate = models =>
    Burger.belongsTo(models.DevouredBy, { foreignKey: { allowNull: true } });

  return Burger;
};
