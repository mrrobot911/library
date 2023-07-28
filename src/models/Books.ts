const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    name: String,
    author: String,
    text: String,
    image: String,
    season: String,
});
const Books = mongoose.models.books || mongoose.model('books', todoSchema);
export default Books