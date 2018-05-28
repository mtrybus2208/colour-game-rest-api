const express = require('express');
 
const fromResultsController = require('./../controllers/results');

const router = express.Router();

router.get('/', fromResultsController.getAllResults);

router.post('/', fromResultsController.addResults);
 

module.exports = router;
