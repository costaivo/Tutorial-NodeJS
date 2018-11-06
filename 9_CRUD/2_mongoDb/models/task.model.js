var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  const taskStatus =['new','todo','in-progress','done'];

var TaskSchema = new Schema({
  title: { type: String },
  description: { type: String },
  dueDate: { type: Date },
  assignedTo:{type:Schema.Types.ObjectId,ref:'User'},
  status:{
        type:String,
        enum:taskStatus,
        default:taskStatus[0]
    }   
},{timestamps:true});

module.exports = mongoose.model('Task', TaskSchema);