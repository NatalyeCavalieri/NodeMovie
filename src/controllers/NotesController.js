const { request, response } = require("express")
const knex = require("../database/knex")

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body
    const user_id  = request.user.id

    const [notes_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id,
    })

    const tagsInsert = tags.map((name) => {
      return {
        notes_id,
        name,
        user_id,
      }
    })

    await knex("movie_tags").insert(tagsInsert)
    return response.json()
  }

  async show(request, response) {
    const { id } = request.params
    const note = await knex("movie_notes").where({ id }).first()
    const tags = await knex("movie_tags")
      .where({ notes_id: id })
      .orderBy("name")
    return response.json({
      ...note,
      tags,
    })
  }

  async delete(request, response) {
    const { id } = request.params
    await knex("movie_notes").where({ id }).delete()

    return response.json()
  }

  async index(request, response) {
    const { title, tags } = request.query
    const user_id = request.user.id

    let notes
    if (tags) {
      const filterTags = tags.split(",").map((tag) => tag.trim())
      notes = await knex("movie_tags")
      .select([
        "movie_notes.id",
        "movie_notes.title",
        "movie_notes.user_id",
      ])
      .where("movie_notes.user_id", user_id)
      .whereLike("movie_notes.title", `%${title}%`)
      .whereIn("name", filterTags)
      .innerJoin("movie_notes", "movie_notes.id", "movie_tags.notes_id")
    } else {
      notes = await knex("movie_notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title")
    }
    return response.json(notes)
  }
}
module.exports = NotesController
