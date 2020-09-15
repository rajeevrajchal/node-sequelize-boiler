const {ErrorHandler} = require('../Helpers/Error');

const User = require('../models').User;

module.exports = {

//your business logic goes here

    //show list of users
    view: (req, res, next) => {
        try {
            User.findAll().then(
                result => {
                    return res.status(200).json({
                        data: result,
                        status: "success"
                    });
                }
            ).catch(
                error => {
                    next(new ErrorHandler(422, error.errors[0].message))
                }
            )
        } catch (error) {
            next(error)
        }
    },

    //find only one user by Id
    findUserById: (req, res, next) => {
        const userId = req.params.id
        try {
            User.findByPk(userId).then(
                result => {
                    if (!result) {
                        next(new ErrorHandler(422, "User doesn't exist"))
                    }
                    return res.status(200).json({
                        data: result,
                        status: "success"
                    });
                }
            ).catch(
                error => {
                    next(new ErrorHandler(422, error.errors[0].message))
                }
            )
        } catch
            (error) {
            next(error)
        }
    },
}

