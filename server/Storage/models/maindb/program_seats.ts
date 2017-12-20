/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {program_seatsInstance, program_seatsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<program_seatsInstance, program_seatsAttribute>('program_seats', {
    program_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'program',
        key: 'program_id'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    seats_available: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'program_seats'
  });
};
