const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: String,
    surname: String,
    password: String,
    email: String,
    role: {
        type: String,
        enum: ['Admin', 'User']
    }
})

module.exports = model('user', userSchema)