import express from 'express';
import * as userDao from '../daos/sql-user.dao';
// import { authMiddleware } from '../middleware/auth.middleware';

// the user router represents a subset of the application
// for all enpoints starting with /users
export const usersRouter = express.Router();

usersRouter.get('', [
    // authMiddleware('admin', 'finance-manager'),
    async (req, res) => {
    const users = await userDao.findUsers(); // returning promise
    res.json(users);
    // res.send('Found all user');  // respond to server method
}]);

/**
 * /users/:id
 * find  user by id
 */
usersRouter.get('/user/:userid', async (req, res) => {
    console.log(req.params.userid);
    const id = req.params.userid; // gets status id and stores in id
    const users = await userDao.findById(id); // calling the find by id function in userDao
    res.json(users);
});

/**
 * /users
 * updates user
 */
usersRouter.patch('', async (req, res) => { // Promise call
    const result  = req.body;
    const user = await userDao.updateUser(result); res.json(user); // calling the update User function in userDao
    res.json(user); // send info to postman in json form
    // res.send('update was done for the user is done');
});