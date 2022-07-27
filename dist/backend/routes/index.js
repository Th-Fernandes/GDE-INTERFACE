"use strict";
const expressRouter = require('express');
const router = expressRouter.Router();
router.get('/', (req, res) => {
    res.json({
        status: 200,
        path: '/'
    });
});
module.exports = router;
