const mongoose = require('mongoose');
const User = require('./user');
const Project = require('./project');
const TaskSchema = new mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    description: String,
    // usersInfo: User,
    // projectInfo: Project,
    status: String,
    startDate: String,
    endDate: String,
});
const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;