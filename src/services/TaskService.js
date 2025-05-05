const Task = require('../models/Task');
module.exports = {
    createTask: async (data) => {
        try {
            let result = await Task.create(data);
            return result;
        } catch (error) {
            console.log('Error creating task:', error);
        }

    },
    getTask: async (limit, page) => {
        try {
            let result = null;
            if (limit && page) {
                let offset = (page - 1) * limit;
                result = await Task.find({}).limit(limit).skip(offset).exec();
                return result;
            } else {
                result = await Task.find({});
                return result;
            }
        } catch (error) {
            console.log('Error getting task:', error);
        }
    },
    putTask: async (data) => {
        try {
            let { id, ...updatefields } = data
            let result = await Task.updateOne({ _id: data.id }, { $set: updatefields })
            return result;
        } catch (error) {
            console.log('Error updating task:', error);

        }
    },
    deleteTask: async (TaskID) => {
        try {
            let result = await Task.deleteOne({ _id: TaskID });
            return result;
        } catch (error) {
            console.log("Error Delete Task: ", error)
        }
    }
}