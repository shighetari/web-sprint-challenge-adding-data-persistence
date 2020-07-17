
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Task').insert([
        {task_desc: 'find scientests', notes: 'offer them unreal sums of money.', task_completed: true, project_id:1},
        {task_desc: 'find workers', notes: 'double workers pay to improve moral.', task_completed: true, project_id:2},
        {task_desc: 'find engineers', notes: 'blackmail and ransom them.', task_completed: true, project_id:3}
      ]);
    });
};
