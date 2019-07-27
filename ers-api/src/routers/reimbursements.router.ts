import express from 'express';
import * as reimbursementDao from '../daos/sql-reimbursement.dao';
import { authMiddleware } from '../middleware/auth.middleware';

export const reimbursementsRouter = express.Router();


/**
 * reimbursements/status/:statusId
 * find reimburse by id
 */
reimbursementsRouter.get('/status/:statusId', [
    authMiddleware(8),
    async (req, res) => {
    const id = req.params.statusId; // gets status id and stores in id
    const result = await reimbursementDao.findReimburseByStatusId(id);
    res.json(result);
}]);


/**
 * reimbursements/author/:userId
 * find reimbursement author id
 */
reimbursementsRouter.get('/author/:userId', [
    authMiddleware(8),
    async (req, res) => {
    const id = req.params.userId; // gets author id and stores in id
    const result = await reimbursementDao.findByUserId(id);
    res.json(result);
}]);


/**
 * reimbursements
 * submitting reimbursement
 */
reimbursementsRouter.post('', async (req, res) => {
    const result = await reimbursementDao.submitReimburse(req.body);
    res.json(result);
    res.status(201);
    // res.send(`submitting reimbursement`);
});

/**
 * reimbursements
 * Updating reimbursement
 */
reimbursementsRouter.patch('/reimbursement/:reimbursementid', [
    authMiddleware(8),
    async (req, res) => {
    const result = await reimbursementDao.updateReimburse(req.body);
    res.json(result);
    // res.send(`updating reimbursement`);
}]);