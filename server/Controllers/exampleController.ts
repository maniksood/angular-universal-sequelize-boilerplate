import * as express from 'express';
import * as DB from '../Storage/models';

// Individual Model declaration
const Main = DB['Main'];
export const example1 = async (req: express.Request, res: express.Response) => {
  const testData = {
    firstName: 'Hello,',
    lastName: 'World'
  };
  let persons;

  try {
    persons = await Main.Persons.findAll();
  } catch (e) {
    console.log('------------------------');
    console.log(e)
    console.log('------------------------');
    persons = {message: 'MySQL connection error'}
  }


  res.send(persons);
};

export const withToken = async (req: express.Request, res: express.Response) => {
  const testData = {
    firstName: 'Hello,',
    lastName: 'World'
  };

  let persons;

  try {
    persons = await Main.Persons.findAll();
  } catch (e) {
    console.log('------------------------');
    console.log(e)
    console.log('------------------------');
    persons = {message: 'MySQL connection error'}
  }


  res.send(persons);
};

