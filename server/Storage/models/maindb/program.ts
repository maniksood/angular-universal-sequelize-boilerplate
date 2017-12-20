/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {programInstance, programAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<programInstance, programAttribute>('program', {
    program_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    program_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    name_of_program: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    time_duration: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    age_limit: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    seo_tags: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    seo_description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    seo_image_url: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'program'
  });
};
