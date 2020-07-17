const db = require('../data/connection')

module.exports = {
    getTask,
    addTask
}

function getTask() {
  return  db('task')
  .select('task.*', 'projects.project_name', 'projects.project_desc')
  .join('projects', 'task.project_id', 'projects.id')
  
}

function addTask(newTask) {
    return db('task').insert(newTask, "id")
    .then(([id]) => {
        return db('task').where({id}).first()
    })
}