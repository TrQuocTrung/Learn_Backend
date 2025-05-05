const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const customerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
});
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});
const ProjectSchema = new mongoose.Schema({
    name: String,
    startDate: String,
    endDate: String,
    description: String,
    customerInfor: customerSchema,
    userInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    leader: userSchema,
    task: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
}, {
    timestamps: true,//CreateAt, updateAt
});
const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;