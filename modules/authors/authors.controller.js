import { Authors } from "../../database/models/authors.model.js"

export const getAuthors = async (req, res) => {
    let AllAuthors = await Authors.find().populate('books','title')
    res.status(200).json({ message: "All Author Has Been Retrieved!", AllAuthors })
}

export const getSpecificAuthor = async (req, res) => {
    let Author = await Authors.findById(req.params.id).populate('books','title')
    res.status(200).json({ message: "Author Data Has Been Retrieved!", Author })
}


export const addAuthor = async (req, res) => {
    let newAuthor = await Authors.insertMany(req.body)
    res.status(201).json({ message: "New Author Has Been Added!", newAuthor })
}

export const updateAuthor  = async (req, res) => {
    let updatedAuthor = await Authors.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({ message: "Author Data Has Been Updated!", updatedAuthor })
}

export const deleteAuthor = async (req, res) => {
    let deletedAuthor = await Authors.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Author Data Has Been Deleted!", deletedAuthor })
}