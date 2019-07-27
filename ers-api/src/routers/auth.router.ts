import express from 'express';
import * as UserDao from '../daos/sql-user.dao';

 export const authRouter = express.Router();

 authRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await UserDao.findByUsernameAndPassword(username, password);
    if (user) {
        req.session.user = user;
        console.log('user found and login');
        res.send('You have logged in! YeeHAW');
        res.end();
    } else {
        req.session.destroy(() => { });
        res.status(400);
        res.send('Invalid Credentials');
    }
});


authRouter.get('/check-session', (req, res) => {
    res.json(req.session);
});