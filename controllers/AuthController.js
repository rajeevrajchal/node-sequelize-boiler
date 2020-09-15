//model import
const User = require('../models').User;

//helper functions
const {
    searchUser,
    hashPassword,
    comparePassword,
    generateToken
} = require('../Helpers/UserHelper');

const {ErrorHandler} = require('../Helpers/Error');

module.exports = {

    // your business logic goes here

    //store/register users
    store: async (req, res, next) => {
        try {

            const {email, password} = req.body

            //get work of validation field
            if (!email || !password) {
                throw new ErrorHandler(422, "All Field Are Required")
            }

            //get work of user verifying
            const userExist = await searchUser(email)
            if (userExist) {
                throw new ErrorHandler(422, "User Already Exist")
            }

            //get work of password hashing
            const bcryptPassword = await hashPassword(password)
            User.create({
                "first_name": req.body.first_name,
                "last_name": req.body.last_name,
                "email": req.body.email,
                "role": req.body.role,
                "password": bcryptPassword,
            }).then(() => {
                return res.status(201).json(
                    {
                        status: "success",
                        message: "User Register SuccessFully"
                    }
                )
            }).catch(
                () => {
                    throw new ErrorHandler(500, "Internal Server Error")
                }
            )
        } catch (error) {
            next(error)
        }
    },

    //user login
    login: async (req, res, next) => {
        try {
            const {email, password} = req.body

            //get work of validation field
            if (!email || !password) {
                throw new ErrorHandler(422, "All Field Are Required")
            }

            //get work of user verifying
            const userExist = await searchUser(email)
            if (!userExist) {
                throw new ErrorHandler(422, "Incorrect Credentials")
            }

            //get work on password verification
            const isMatch = await comparePassword(password, userExist.password)
            if (!isMatch) {
                throw new ErrorHandler(422, "Incorrect Credentials")
            }

            //get work on generating token.
            const token = await generateToken(userExist)
            if (!token) {
                throw new ErrorHandler(500, "Internal Server Error")
            }
            return res.status(200).json({
                    token: token,
                    user: userExist
                }
            )
        } catch (e) {
            next(e)
        }
    }
}
