/* This file holds the schema for the book & the validation code */

const Joi = require('joi');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  quantity: Number
})

const Book = mongoose.model('Book', bookSchema);

function validateBook(book) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      quantity: Joi.number().integer().min(0)
    })
    return schema.validate(book);
}  

exports.Book = Book;
exports.validate = validateBook;