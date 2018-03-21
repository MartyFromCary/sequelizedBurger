module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "Burger",
    {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        default: false
      }
    },
    { timestamps: false }
  );
