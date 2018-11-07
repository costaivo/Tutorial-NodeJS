var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  const taskStatus =['new','todo','in-progress','done'];

var TaskSchema = new Schema({
  title: { type: String },
  description: { type: String },
  dueDate: { type: Date },
  assignedTo:{type:Schema.Types.ObjectId,ref:'User'},
  updatedBy:{type:Schema.Types.ObjectId,ref:'User'},
  status:{
        type:String,
        enum:taskStatus,
        default:taskStatus[0]
    }   
},{timestamps:true});


TaskSchema.pre("save", function(next) {
  var self = this;

  this.updatedBy="5be27fbb887e0e41d8fa3f88";
  next();
});

module.exports = mongoose.model('Task', TaskSchema);