var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
  firstName: { type: String,
    required: [true, 'firstName is required'] },
  lastName: { type: String },
  email: { type: String },
  address: { type: String },
  mobile: { type: Number, required: [true, 'mobile number is required'] }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)
