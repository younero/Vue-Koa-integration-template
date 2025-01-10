const {
    MONGODB_HOST,
    MONGODB_PORT,
    MONGODB_USER,
    MONGODB_PWD,
    MONGODB_DB
} = require('../config/index')['mongo']

const mongoose = require('mongoose')

mongoose.connect(`mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`, {
    authSource: 'admin',
    auth: {
        username: MONGODB_USER,
        password: MONGODB_PWD
    }
}).then(() => {
    console.log('MongoDB connected')
}).catch(err => {
    console.log('MongoDB connect error: ', err)
})

module.exports = mongoose