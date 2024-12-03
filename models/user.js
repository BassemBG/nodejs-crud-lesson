const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Username is required" },
        len: { args: [2, 5], msg: "Username must be between 2 and 5 characters" },
      },
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Password is required" },
        isInt: { msg: "Password must be a number" },
      },
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Birthday is required" },
        isDate: { msg: "Birthday must be a valid date" },
        isBefore: {
          args: new Date().toISOString().split("T")[0], // Current date
          msg: "Birthday must be in the past",
        },
      },
    },
  });
};
