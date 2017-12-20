// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  business_image:def.business_imageModel;
  business:def.businessModel;
  customer:def.customerModel;
  Persons:def.PersonsModel;
  feature_details:def.feature_detailsModel;
  features:def.featuresModel;
  program:def.programModel;
  program_seats:def.program_seatsModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    business_image: seq.import(path.join(__dirname, './business_image')),
    business: seq.import(path.join(__dirname, './business')),
    customer: seq.import(path.join(__dirname, './customer')),
    Persons: seq.import(path.join(__dirname, './Persons')),
    feature_details: seq.import(path.join(__dirname, './feature_details')),
    features: seq.import(path.join(__dirname, './features')),
    program: seq.import(path.join(__dirname, './program')),
    program_seats: seq.import(path.join(__dirname, './program_seats')),
  };
  return tables;
};
