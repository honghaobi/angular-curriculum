
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('all_pirates').del(),

    // Inserts seed entries
    knex('all_pirates').insert({name: 'henry', poison: 'rum', accesory: 'gun', image_url: 'http://worldhistory.mrdonn.org/powerpoints/occupations_pirate.gif'}),
    knex('all_pirates').insert({name: 'will', poison: 'salt', accesory: 'sword', image_url: 'http://svojeglavci.si/wp-content/uploads/2015/07/piratotroci-1.gif'}),
    knex('all_pirates').insert({name: 'ann', poison: 'coke', accesory: 'pipe', image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'})
  );
};
