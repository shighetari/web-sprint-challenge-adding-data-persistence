const db = require('../data/connection')

module.exports = {
    getResource,
    addResource
    
}

function getResource() {
  return  db('resource')
}

function addResource(newResource) {
    return db('resource').insert(newResource, "id") // for postgres, also giving us that annoying .returning() is not supported msg
    .then(([id]) => {
        return db('resource').where({id}).first()
    })
}
