import { Router } from "express";
import { addAuthor, deleteAuthor, getAuthors, getSpecificAuthor, updateAuthor } from "./authors.controller.js";

const authorsRouter = Router()

authorsRouter.get('/', getAuthors)
authorsRouter.get('/:id', getSpecificAuthor)
authorsRouter.post('/', addAuthor)
authorsRouter.patch('/:id', updateAuthor)
authorsRouter.delete('/:id', deleteAuthor)



export default authorsRouter