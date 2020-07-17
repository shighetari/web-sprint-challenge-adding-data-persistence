
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        { project_name: 'Manhattan Project', project_desc: 'The Manhattan Project was a research and development undertaking during World War II that produced the first nuclear weapons. It was led by the United States with the support of the United Kingdom and Canada.',
         project_completed: true },
        { project_name: 'Atlantic Wall', project_desc: 'The Atlantic Wall was an extensive system of coastal defences and fortifications built by Nazi Germany between 1942 and 1944, along the coast of continental Europe and Scandinavia as a defence against an anticipated Allied invasion of Nazi-occupied Europe from the United Kingdom, during World War II.', 
        project_completed: true },
        { project_name: 'The Gigantic Maus Tank', project_desc: 'If there is any doubt that the crazed minds running the Third Reich, especially that of Adolf Hitler, never gave up the quest to have the biggest and best engines of war, the Maus puts that issue to rest. The Maus, or Mouse tank, weighed 180 tons. Hitler first saw a full-scale wooden model of this monster armored fighting vehicle at the Führer Headquarters in East Prussia in May 1943. He was ecstatic over the model.', 
        project_completed: true }
      ]);
    });
};
