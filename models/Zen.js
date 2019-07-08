const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zensSchema = new Schema({
  _creator: { 
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  title: { type: String, required: true },
  description: { type: String, required: true, maxlength: 280 },
  links: [String],
  image: String,
  additional_info: String,   
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Zens = mongoose.model("Zens", zensSchema);
module.exports = Zens;