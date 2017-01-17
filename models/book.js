const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  title : {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  publisher: {
    type: String,
  },
  pages: {
    type: String,
  },
  image_url: {
    type: String,
  },
  buy_url: {
    type: String,
  }
})

const Book = module.exports = mongoose.model('Book', bookSchema)
//Get Book by the ID
module.exports.getBookById = function (id, callback) {
  Book.findById(id, callback)
}
//Get Books
module.exports.getBooks = (callback, limit) => {
  Book.find(callback).limit(limit)
}
//Add Book
module.exports.addBook = (book, callback) => {
  Book.create(book, callback)
}
