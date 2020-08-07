const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log("POST", req.body);
    const sqlQuery = `INSERT INTO "pose" ("name", "flow_id", "imageUrl")
    VALUES ('${req.body.pose}', ${req.body.flowId}, '${req.body.url}');`;

    pool.query(sqlQuery)
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
});

module.exports = router;