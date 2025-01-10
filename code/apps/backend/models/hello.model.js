const {Schema} = require('mongoose')
const mongoose = require('../db/index')

const helloSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Hello = mongoose.model('Hello', helloSchema)

module.exports = Hello