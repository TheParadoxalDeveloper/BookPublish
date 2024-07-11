import { Books } from "../../database/models/books.model.js"

export const addBook = async (req, res) => {
    let newBook = await Books.insertMany(req.body)
    res.status(201).json({ message: "New Book Has Been Added!", newBook })
}

export const getBooks = async (req, res) => {
    let AllBooks = await Books.find()
    res.status(200).json({ message: "All Books Has Been Retrieved!", AllBooks })
}

export const getSpecificBook = async (req, res) => {
    let Book = await Books.findById(req.params.id)
    res.status(200).json({ message: "Book Data Has Been Retrieved!", Book })
}

export const updateBook = async (req, res) => {
    let updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({ message: "Book Data Has Been Updated!", updatedBook })
}

export const deleteBook = async (req, res) => {
    let deletedBook = await Books.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Book Data Has Been Deleted!", deletedBook })
}