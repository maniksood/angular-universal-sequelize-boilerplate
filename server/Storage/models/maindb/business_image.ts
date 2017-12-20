/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {business_imageInstance, business_imageAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<business_imageInstance, business_imageAttribute>('business_image', {
    business_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'business',
        key: 'business_id'
      }
    },
    image_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    image_description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    image_priority: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'business_image'
  });
};
