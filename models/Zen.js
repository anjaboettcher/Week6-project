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
  image: { type: String, default: "../images/default_img.png"},
  additional_info: String,   
  emailTo: String
  //,isRead: {type:Boolean, default: false}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Zens = mongoose.model("Zens", zensSchema);
module.exports = Zens;