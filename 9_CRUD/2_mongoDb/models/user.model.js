var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String }
},{timestamps:true});

module.exports = mongoose.model('User', UserSchema);