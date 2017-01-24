
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from "probe"; alter sequence probe_id_seq restart with 6')
    .then(function () {
      const probes = [{
        id: 1,
        type: "idk",
        placement: 'a place',
        lights: 'many',
        user_id: 1
      },{
        id: 2,
        type: "idk pt 2",
        placement: 'stuff',
        lights: 'manys',
        user_id: 1
      },{
        id: 3,
        type: "idk pt 3",
        placement: 'why did i do this',
        lights: 'a lot',
        user_id: 2
      },{
        id: 4,
        type: "aliens really?",
        placement: 'why am i like this',
        lights: 'few',
        user_id: 2
      },{
        id: 5,
        type: "why god",
        placement: 'still a place',
        lights: 'one',
        user_id: 1
      }]
      return knex('probe').insert(probes);
    });
};
