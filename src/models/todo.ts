const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    books: String,
});
export default mongoose.model.books || mongoose.model('books', todoSchema);