
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resource').insert([
        {resource_name: 'uranium', resource_desc: 'Y-12 Plant. The Y-12 Plant in Oak Ridge used the electromagnetic separation method, developed by Ernest Lawrence at University of California-Berkeley, to separate uranium isotopes, and was the most developed way to produce fissile material at the start of the Manhattan Project.'},
        {resource_name: 'Concrete', resource_desc: 'used to fortify the atlantic wall'},
        {resource_name: 'iron', resource_desc: 'material mined for its metals used in production for heavy tanks and artilary.'}
      ]);
    });
};
