const Fleet = require('./fleet')
const errorHandler = require('../common/errorHandler')

Fleet.methods(['get', 'post', 'put', 'delete'])
Fleet.updateOptions({new: true, runValidators: true})
Fleet.after('post', errorHandler).after('put', errorHandler)

Fleet.route('count', (req, res, next) => {
    Fleet.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Fleet