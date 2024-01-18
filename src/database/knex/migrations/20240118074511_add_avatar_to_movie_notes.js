exports.up = (knex) =>{
  return knex.schema.table("movie_notes", (table) => {
  table.text("avatar_url").nullable()
  })
 }
exports.down = (knex) => {
  return knex.schema.table("movie_notes", (table) => {
    table.dropColumn("avatar_url")
  })
  }