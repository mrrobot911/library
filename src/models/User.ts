const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please provide name'],
      minlength: 3,
      maxlength: 50,
    }, 
    password: {
      type: String,
      required: [true, 'Please provide password'],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    books: {
      type: Array,
      default: [],
    }
  });

  const users = mongoose.models.users || mongoose.model('users', UserSchema);
  export default users