/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {feature_detailsInstance, feature_detailsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<feature_detailsInstance, feature_detailsAttribute>('feature_details', {
    feature_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    business_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'feature_details'
  });
};
