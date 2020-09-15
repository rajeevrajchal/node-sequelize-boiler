const { handleError } = require('../Helpers/Error');

module.exports = (app) => {

    //connecting multiple routes
    app.use('/api', require('./api/AuthRoute'))
    app.use('/api/users', require('./api/UserRoute'))

    //for error handling
    app.use((err, req, res, next) => {
        handleError(err, res);
    });

}
