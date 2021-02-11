exports.up = function (knex) {
  return knex.schema.createTable('flavours', table => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.integer('price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('flavours')
}