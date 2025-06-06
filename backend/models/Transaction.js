const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Transaction extends Model {}

Transaction.init(
  {
    Transaction_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    User_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User_Table",
        key: "UserID",
      },
    },
    Stock_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Stock_Table",
        key: "StockID",
      },
    },
    Transaction_Type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isIn: {
          args: [["Buy", "Sell"]],
          msg: "Transaction_Type must be 'Buy' or 'Sell'",
        },
      },
    },
    Price_Per_Share: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    Total_Amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    Transaction_Date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Transaction",
    tableName: "Transaction_Table",
    timestamps: false,
  }
);

module.exports = Transaction;