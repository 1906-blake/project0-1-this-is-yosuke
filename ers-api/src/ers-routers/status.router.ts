import express from 'express';

import * as statusDao from '../ers-daos/sql-status.dao';

export const statusRouter = express.Router();

statusRouter.get('', async (req, res) => {
    const status = await statusDao.findAll();
    res.json(status);
});