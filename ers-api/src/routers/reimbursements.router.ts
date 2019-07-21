import express from 'express';
import * as reimbursementDao from '../daos/sql-card.dao';

export const reimbursementsRouter = express.Router();

/**
 * /cards
 * create new card resource
 */
reimbursementsRouter.post('', async (req, res) => {
    const reimbursement = req.body;
    if (!reimbursement) {
        res.sendStatus(400);
    } else {
        const id = await reimbursementDao.save(reimbursement);
        if (!id) {
            res.sendStatus(400);
        } else {
            card.id = id;
            res.status(201); // created status code
            res.json(card);
        }
    }
});

/**
 * /reimbursements
 * Find all reimbursements
 */
reimbursementsRouter.get('', async (req, res) => {
    const reimbursements = await reimbursementDao.findAll();
    res.json(reimbursements);
});

/**
 * /cards/game/:game
 * find cards by game
 */
reimbursementsRouter.get('/game/:game', (req, res) => {
    res.send(`finding cards by game: ${req.params.game}`);
});


/**
 * /cards/:id
 * find cards by id
 */
cardsRouter.get('/:id', (req, res) => {
    res.send(`finding cards by id: ${req.params.id}`);
});

/**
 * /cards/owner/:ownerId
 * find cards by owner's id
 */
cardsRouter.get('/owner/:ownerId', (req, res) => {
    res.send(`finding cards by owner's id: ${req.params.ownerId}`);
});


/**
 * /cards
 * create new card resource
 */
cardsRouter.post('', async (req, res) => {
    const card = req.body;
    if (!card) {
        res.sendStatus(400);
    } else {
        const id = await cardDao.save(card);
        if (!id) {
            res.sendStatus(400);
        } else {
            card.id = id;
            res.status(201); // created status code
            res.json(card);
        }
    }
});

/**
 * /cards
 * partially update card resource
 */
cardsRouter.patch('', (req, res) => {
    res.send(`updating card: ${JSON.stringify(req.body)}`);
});

/**
 * /cards
 * delete card by id
 */
cardsRouter.delete('/:id', (req, res) => {
    console.log(`deleting card with id: ${req.params.id}`);
    res.send(`deleting card with id: ${req.params.id}`);
});