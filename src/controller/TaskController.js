const { createTask, getTask, putTask, deleteTask } = require('../services/TaskService');
module.exports = {
    postTaskAPI: async (req, res) => {
        if (req.body.type === 'EMPTY-TASK') {
            let result = await createTask(req.body);
            console.log('result', result);
            return res.status(200).json({
                status: 'success',
                message: 'Task created successfully',
                data: result
            })


        }

    },
    getTaskAPI: async (req, res) => {
        let limit = req.query.limit;
        let page = req.query.page;
        let result = null;
        if (limit && page) {
            result = await getTask(limit, page);
            return res.status(200).json({
                status: 'success',
                message: 'Task fetched successfully',
                data: result
            })
        } else {
            result = await getTask();
            return res.status(200).json({
                status: 'success',
                message: 'Task fetched successfully',
                data: result
            })
        }

    },
    putTaskAPI: async (req, res) => {
        let result = await putTask(req.body);
        return res.status(200).json({
            status: 'success',
            message: 'Task updated successfully',
            data: result
        })
    },
    deleteTaskAPI: async (req, res) => {

        let result = await deleteTask(req.body.TaskID);
        return res.status(200).json({
            status: "Delete Success",
            message: "Task deleted successfully",
            data: result

        })
    }
}