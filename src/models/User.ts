const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: {
      type: String,
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
  });

  const users = mongoose.models.users || mongoose.model('users', UserSchema);
  export default users