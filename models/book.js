const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  title :{
    type: String,
    required: true
  },
  genre:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  pages: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  buy_url: {
    type: String,
    required: true
  }
})

const Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBooks = (callback, limit) => {
  Book.find(callback).limit(limit)
}
