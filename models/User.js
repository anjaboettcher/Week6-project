const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  // pictureUrl: { type: String, default: "../images/placeholder.png"},
  username: {type: String, unique: true}, 
  email: {type: String, unique: true}, 
  password: String,
  status: {type: String, enum: ["Pending Confirmation", "Active"], default: "Pending Confirmation"},
  confirmationCode: {type: String, unique: true},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
