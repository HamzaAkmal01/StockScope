const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Stock = sequelize.define(
  "Stock",
  {
    StockID: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    StockName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    TickerSymbol: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    CurrentPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    OpeningPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    ClosingPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    HighPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    LowPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    MarketCap: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    Sector: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Exchange: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'Timestamp'
    },
  },
  {
    tableName: "Stock_Table",
    timestamps: false,
  }
);

module.exports = Stock;