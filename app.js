const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Genre = require('./models/genre')
const Book = require('./models/book')
//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore')
const db = mongoose.connection

app.get('/', (req, res) => {
  res.send('Please use the /api/books or /api/genres ')
})

app.get('/api/books', (req, res) => {
  Book.getBooks((err, books)=>{
    if(err) {
      throw err
    }
    res.json(books)
  })
})

app.get('/api/genres', (req, res) => {
  Genre.getGenres((error,genres)=>{
    if(error) {
      throw error
    }
    res.json(genres)
  })
})

app.listen(3000)
console.log('Running on port 3000, loud and clear');
