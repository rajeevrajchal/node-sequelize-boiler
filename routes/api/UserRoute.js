const express = require('express');
const UserController = require('../../controllers/UserController');
const router = express.Router()

router.get('',UserController.view)
router.get('/:id',UserController.findUserById)

module.exports = router;
