const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: `mongodb+srv://TestSoftUni:testsoftuni123@testsoftuni-wj5mq.mongodb.net/test?retryWrites=true&w=majority`,
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];