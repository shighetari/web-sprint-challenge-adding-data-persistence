const db = require('../data/connection')

module.exports = {
    getProjects,
    addProject,
    getProjectResources
}

function getProjects() {
  return  db('projects')
}

function addProject(newProject) {
    return db('projects').insert(newProject, "id")
    .then(([id]) => {
        return db('projects').where({id}).first()
    })
}


function getProjectResources(project_id) {
    return  db('resource')
    .join('Intermediary', 'Intermediary.projects_id', 'Projects.id')
    .join('Projects', 'Intermediary.resource_id', 'Resource.id')
    .select('Projects.project_name', 'resource.*', 'projects.project_desc' )
    .where('projects.id', '=', project_id)
    
  }
