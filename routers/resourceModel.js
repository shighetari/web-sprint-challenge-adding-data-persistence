const db = require('../data/connection')

module.exports = {
    getResource,
    addResourceToProject
    
}

function getResource() {
  return  db('resource')
}

function addResourceToProject(newResource, projects_id) {
    return db('resource')
    .insert(newResource, "id") // for postgres, also giving us that annoying .returning() is not supported msg
    .then(([id]) => { //new ID for the NEW resource
      return db('intermediary')
       .insert({projects_id: projects_id, resource_id: id}, 'id')
       .then( () => {
        return   db('resource')
           .where({id})
           .first()
       })

    })
    
}
