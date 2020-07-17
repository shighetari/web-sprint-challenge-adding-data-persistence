
exports.up = function(knex) {
    return knex.schema
    .createTable('Projects', tbl => {
        tbl.increments()
        tbl.text('project_name').unique().notNullable()
        tbl.text('project_desc')
        tbl.boolean('project_completed').defaultTo(false).notNullable()
    })
    .createTable('Resource', tbl => {
        tbl.increments()
        tbl.text('resource_name').notNullable().unique()
        tbl.text('resource_desc')
  
    })
    .createTable('Task', tbl => {
        tbl.increments()
        tbl.text('task_desc').notNullable()
        tbl.text('notes')
        tbl.boolean('task_completed').notNullable().defaultTo(false)
        tbl.integer('project_id').unsigned().notNullable().references('Projects.ID')
    })
    .createTable('Intermediary', tbl => {
        tbl.integer('projects_id').notNullable().references('Projects.ID')
        tbl.integer('resource_id').notNullable().references('Resource.ID')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Intermediary')
    .dropTableIfExists('Task')
    .dropTableIfExists('Resource')
    .dropTableIfExists('Projects')
  
  
  };
  