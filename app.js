import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import authorsRouter from './modules/authors/authors.routes.js'
import booksRouter from './modules/books/books.routes.js'
const app = express()
const port = 3666
app.use(express.json())
app.get('/', (req, res) => res.send('<b>BooksPublish</b> : An Application to manage a collection of books and authors.'))
app.use('/authors', authorsRouter)
app.use('/books', booksRouter)



app.listen(port, () => console.log(`server listening on port ${port}!`))