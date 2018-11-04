const restful = require('node-restful')
const mongoose = restful.mongoose

const fleetSchema = new mongoose.Schema({
    model: { type: String, required: true },
    number: { type: String, required: true }
})

module.exports = restful.model('Fleet', fleetSchema)