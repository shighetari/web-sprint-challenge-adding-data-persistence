
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Intermediary').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Intermediary').insert([
        {projects_id: 1, resource_id: 1},
        {projects_id: 2, resource_id: 2},
        {projects_id: 3, resource_id: 3}
      ]);
    });
};
