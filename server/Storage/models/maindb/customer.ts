/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {customerInstance, customerAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<customerInstance, customerAttribute>('customer', {
    customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    page_last_accessed: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    last_accessed_timestamp: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'customer'
  });
};
