import * as express from 'express';
const exampleRouter = express.Router();
//
import * as exampleController from '../Controllers/exampleController';
import {isAuthenticated} from '../MiddleWares/jwt-auth';
//
//
exampleRouter.get('/example1', exampleController.example1);
exampleRouter.get('/example2', isAuthenticated, exampleController.withToken);
// exampleRouter.get('/dropboxExample', exampleController.dropbox);
// exampleRouter.get('/driveExample', exampleController.driveExample);
// exampleRouter.get('/awss3', exampleController.awsS3);
// exampleRouter.get('/users', exampleController.users);
//
//
//
//
export = exampleRouter;
//
//
