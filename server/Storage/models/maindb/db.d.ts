// tslint:disable
import * as Sequelize from 'sequelize';


// table: business_image
export interface business_imageAttribute {
  business_id?:number;
  image_path?:string;
  image_description?:string;
  image_priority?:number;
}
export interface business_imageInstance extends Sequelize.Instance<business_imageAttribute>, business_imageAttribute { }
export interface business_imageModel extends Sequelize.Model<business_imageInstance, business_imageAttribute> { }

// table: business
export interface businessAttribute {
  business_id:number;
  description?:string;
  yelp_link?:string;
  address?:string;
  business_contact?:string;
  google_link?:string;
}
export interface businessInstance extends Sequelize.Instance<businessAttribute>, businessAttribute { }
export interface businessModel extends Sequelize.Model<businessInstance, businessAttribute> { }

// table: customer
export interface customerAttribute {
  customer_id:number;
  first_name?:string;
  last_name?:string;
  email?:string;
  phone_number?:string;
  page_last_accessed?:string;
  last_accessed_timestamp?:string;
}
export interface customerInstance extends Sequelize.Instance<customerAttribute>, customerAttribute { }
export interface customerModel extends Sequelize.Model<customerInstance, customerAttribute> { }

// table: Persons
export interface PersonsAttribute {
  id:number;
  LastName:string;
  FirstName?:string;
  Age?:number;
  createdAt:Date;
  updatedAt:Date;
}
export interface PersonsInstance extends Sequelize.Instance<PersonsAttribute>, PersonsAttribute { }
export interface PersonsModel extends Sequelize.Model<PersonsInstance, PersonsAttribute> { }

// table: feature_details
export interface feature_detailsAttribute {
  feature_id?:number;
  business_id?:number;
  value?:string;
}
export interface feature_detailsInstance extends Sequelize.Instance<feature_detailsAttribute>, feature_detailsAttribute { }
export interface feature_detailsModel extends Sequelize.Model<feature_detailsInstance, feature_detailsAttribute> { }

// table: features
export interface featuresAttribute {
  feature_id:number;
  image_path?:string;
  image_description?:string;
  image_priority?:number;
}
export interface featuresInstance extends Sequelize.Instance<featuresAttribute>, featuresAttribute { }
export interface featuresModel extends Sequelize.Model<featuresInstance, featuresAttribute> { }

// table: program
export interface programAttribute {
  program_id:number;
  program_type?:string;
  price?:string;
  name_of_program?:string;
  time_duration?:string;
  age_limit?:string;
  seo_tags?:string;
  seo_description?:string;
  seo_image_url?:string;
}
export interface programInstance extends Sequelize.Instance<programAttribute>, programAttribute { }
export interface programModel extends Sequelize.Model<programInstance, programAttribute> { }

// table: program_seats
export interface program_seatsAttribute {
  program_id?:number;
  date?:Date;
  seats_available?:number;
}
export interface program_seatsInstance extends Sequelize.Instance<program_seatsAttribute>, program_seatsAttribute { }
export interface program_seatsModel extends Sequelize.Model<program_seatsInstance, program_seatsAttribute> { }
