const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    books: String,
});
const Books = mongoose.models.books || mongoose.model('books', todoSchema);
export default Books