/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {businessInstance, businessAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<businessInstance, businessAttribute>('business', {
    business_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    yelp_link: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    business_contact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    google_link: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'business'
  });
};
