import { Router } from "express";
import { addBook, deleteBook, getBooks, getSpecificBook, updateBook } from "./books.controller.js";

const booksRouter = Router()

booksRouter.get('/', getBooks)
booksRouter.get('/:id', getSpecificBook)
booksRouter.post('/', addBook)
booksRouter.patch('/:id', updateBook)
booksRouter.delete('/:id', deleteBook)


export default booksRouter