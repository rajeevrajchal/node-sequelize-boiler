const jwt = require('jsonwebtoken')
const {
    ErrorHandler
} = require('../../Helpers/Error')
const {
    findUserRole
} = require('../../Helpers/UserHelper')

module.exports = {
    validateUserRole:async (req, res, next) => {
        try{
            const user_id = req.params.id
            const user = await findUserRole(user_id)

            //custom condition for the permission role
            if(user.role !== "admin"){
                throw new ErrorHandler(401, "You haven't permission")
            }
            next()
        }catch (e) {
            next(e)
        }
    }
}
