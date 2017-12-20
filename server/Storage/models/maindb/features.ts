/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {featuresInstance, featuresAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<featuresInstance, featuresAttribute>('features', {
    feature_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    image_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    image_priority: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'features'
  });
};
