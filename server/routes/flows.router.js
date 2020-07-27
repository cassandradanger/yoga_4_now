const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let sqlQuery = 'SELECT * from "flows"';
    pool.query(sqlQuery)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
});

router.get('/:flow', (req, res) => {
    console.log('req.boyd', req.params);
    let sqlQuery = `SELECT * from "pose" WHERE "flow_id" = '${req.params.flow}'; `;
    pool.query(sqlQuery)
    .then((result) => {
        console.log("HAHAHAHHAHAHAHHHHAA", result.rows);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;