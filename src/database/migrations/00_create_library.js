const knex = require('knex');

exports.up = async function(knex){
    return knex.schema.createTable('library', table => {
        table.increments('id').primary();
        table.string('book').notNullable();
        table.string('path').notNullable();
        table.string('image').notNullable();
        table.string('synopsis').notNullable();
        table.enu('type', ['pdf', 'epub']).notNullable();
    });
}

exports.down = async function(knex){
    return knex.schema.dropTable('library');
}