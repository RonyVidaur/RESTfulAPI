const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const Genre = require('./models/genre')
const Book = require('./models/book')

//connect to mongoose
mongoose.connect('mongodb://127.0.0.1/bookstore')
const db = mongoose.connection

app.get('/', (req, res) => {
  res.send('Please use the /api/books or /api/genres')
})

//get all books
app.get('/api/books', (req, res) => {
  Book.getBooks((error, books) => {
    if (error) {
      throw error
    }
    res.json(books)
  })
})

//get a book by Id
app.get('/api/books/:_id', (req, res) => {
  Book.getBookById(req.params._id, (error, book) => {
    if (error) {
      throw error
    }
    res.json(book)
  })
})

//Add Book
app.post('/api/books', (req, res) => {
  const book = req.body
  Book.addBook(book, (error, book) => {
    if (error) {
      throw error
    }
    res.json(book)
  })
})

//Update Book
app.put('/api/books/:_id', (req, res) => {
  const id = req.params._id
  const book = req.body
  Book.updateBook(id, book, {}, (error, book) => {
    if (error) {
      throw error
    }
    res.json(book)
  })
})

//Delete Book
app.delete('/api/books/:_id', (req, res) => {
  const id = req.params._id
  const genre = req.body
  Book.removeBook(id, (error, book) => {
    if (error) {
      throw error
    }
    res.json(genre)
  })
})


/* GENRES FROM HERE */

//get genres
app.get('/api/genres', (req, res) => {
  Genre.getGenres((error, genres) => {
    if (error) {
      throw error
    }
    res.json(genres)
  })
})

//Add genre
app.post('/api/genres', (req, res) => {
  const genre = req.body
  Genre.addGenre(genre, (error, genre) => {
    if (error) {
      throw error
    }
    res.json(genre)
  })
})

//Update genre
app.put('/api/genres/:_id', (req, res) => {
  const id = req.params._id
  const genre = req.body
  Genre.updateGenre(id, genre, {}, (error, genre) => {
    if (error) {
      throw error
    }
    res.json(genre)
  })
})

//Delete genre
app.delete('/api/genres/:_id', (req, res) => {
  const id = req.params._id
  const genre = req.body
  Genre.removeGenre(id, (error, genre) => {
    if (error) {
      throw error
    }
    res.json(genre)
  })
})


app.listen(3000)
console.log('Running on port 3000, loud and clear')
