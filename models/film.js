"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  film.init(
    {
      name: DataTypes.STRING,
      imageurl: DataTypes.STRING,
      info: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "film",
    }
  );
  return film;
};
