var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: { type: String },
  description: { type: String },
  dueDate: { type: Date },
  assignedTo:{type:Schema.Types.ObjectId,ref:'User'}
},{timestamps:true});

module.exports = mongoose.model('Task', TaskSchema);