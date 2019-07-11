const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zensSchema = new Schema({
  _creator: { 
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  title: { type: String, required: true },
  description: { type: String, required: true, maxlength: 500 },
  links: [String],
  image: { type: String, default: "https://res.cloudinary.com/hanqgr02n/image/upload/v1562866169/zen-images/logo-with-background_lnh1gk.png"},
  additional_info:{ type: String, maxlength: 500 },
  emailTo: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Zens = mongoose.model("Zens", zensSchema);
module.exports = Zens;