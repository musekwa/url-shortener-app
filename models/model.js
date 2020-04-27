const mongoose = require('mongoose')
const shortId = require('shortid')


const schema = new mongoose.Schema({
    original_url: {
        type: String,
        required: true
    },
    short_url:{
        type: String,
        default: shortId.generate,
        required: true
    }
})
const model = mongoose.model('model', schema)
module.exports = model
