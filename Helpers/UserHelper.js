
//model import
const User = require('../models').User;

//packages
// jwt and bcrypt are use as the logic of authentication, you can change on your own.

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// jwt and bcrypt are use as the logic of authentication, you can change on your own.
module.exports = {

    //search users
    searchUser: (email) => {
        return User.findOne({
            where: { email: email },
        })
    },

    //create hashPassword using bcrypt and 12 key
    hashPassword: (password) => {
        return bcrypt.hash(password, 12)
    },

    //compare password to authenticate
    comparePassword: (password, oldPassword) => {
        return bcrypt.compare(password, oldPassword);
    },

    //generate token using jwt
    // jwt takes secret key imported by .env file
    generateToken: (result) => {
        const secretkey = process.env.SECRET_KEY
        const payload = {
            user: {
                id: result.id,
                email: result.email === 'thisistest@test.com' ? '': result.email ,
                first_name: result.first_name,
            }
        };
        return jwt.sign(
            payload,
            secretkey,
            {
                expiresIn: 3600
            },
        );
    },
}
