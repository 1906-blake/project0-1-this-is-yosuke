import express from 'express';
import * as userDao from '../daos/sql-user.dao';
import { authMiddleware } from '../middleware/auth.middleware';

// the user router represents a subset of the application
// for all enpoints starting with /users
export const usersRouter = express.Router();

usersRouter.get('', [
     authMiddleware(8, 9),
    async (req, res) => {
    const users = await userDao.findUsers(); // returning promise
    res.json(users);
    // res.send('Found all user');  // respond to server method
}]);

/**
 * /users/:id
 * find  user by id
 */
usersRouter.get('/user/:userid', [
    authMiddleware(8, 9),
    async (req, res) => {
    const id = req.params.userid; // gets status id and stores in id
    const users = await userDao.findById(id); // calling the find by id function in userDao
    res.json(users);
}]);

/**
 * /users
 * updates user
 */
usersRouter.patch('/user/:userid', [
    authMiddleware(9),
    async (req, res) => { // Promise call
    const result  = req.body;
    const user = await userDao.updateUser(result); // calling the update User function in userDao
    res.json(user); // send info to postman in json form
    res.send('update for the user is done');
}]);

/**
 * /users
 * partially update user resource
 */
//  usersRouter.patch('', async (req, res) => {
//     const userId = req.body.id;
//     const currentLoggedInUser = req.session.user;
//     if (currentLoggedInUser && currentLoggedInUser.id === userId) {
//         const updatedUser = await userDao.updateUser(req.body);
//         res.json(updatedUser);
//     } else {
//         res.sendStatus(403);
//     }
// });