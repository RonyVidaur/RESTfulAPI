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

//Update a Book
module.exports.updateBook = (id, book, options, callback) => {
  const query = {_id: id}
  const update = {
    title: book.title,
    genre: book.genre,
    description: book.description,
    author: book.author,
    publisher: book.publisher,
    pages: book.pages,
    image_url: book.image_url,
    buy_url: book.buy_url
  }
Book.findOneAndUpdate(query, update, options, callback)
}

 //Delete a Book
 module.exports.removeBook = (id, callback) => {
   const query = {_id: id}
   Book.remove(query, callback)
 }
