const express = require('express');
const UserController = require('../../controllers/UserController');
const validateUser = require('../../middleware/auth/validateUser')
const permissionUser = require('../../middleware/auth/permissionUser')
const router = express.Router()

router.get(
    '',
    [
        validateUser.validateUser,
        permissionUser.validateUserRole
    ],
    UserController.view
)

router.get(
    '/:id',
    [
        validateUser.validateUser,
    ],
    UserController.findUserById
)

module.exports = router;
