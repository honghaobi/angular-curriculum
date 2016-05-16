exports.up = function(knex, Promise) {
    return knex.schema.createTable('all_pirates', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('poison');
    table.string('accesory');
    table.string('image_url');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('all_pirates');
};
