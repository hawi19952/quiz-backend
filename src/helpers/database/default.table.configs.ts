import { DataTypes } from "sequelize";

export const tableDefaultConfigs = {
  timestamps: true,
  updatedAt: true,
  createdAt: true,
  paranoid: true
};

export const id = {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  allowNull: false, 
  unique: true,
  primaryKey: true,
};


export const { STRING, BOOLEAN, TEXT, INTEGER } = DataTypes
