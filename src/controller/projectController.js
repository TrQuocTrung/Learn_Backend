const { createnewProjectAPI, getProjectAPI, updateProjectAPI, deleteProjectAPI, deleteUserByproject } = require('../services/projectService');

module.exports = {
    createnewProjectAPI: async (req, res) => {
        try {

            let result = await createnewProjectAPI(req.body);
            return res.status(200).json({
                message: "Project created successfully",
                data: result,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Error creating project",
                error: error.message,
            });
        }
    },
    GetProjectAPI: async (req, res) => {
        let result = await getProjectAPI(req.query);
        return res.status(200).json({
            message: "Get project successfully",
            data: result,
        });
    },
    PutProjectAPI: async (req, res) => {
        try {
            let result = await updateProjectAPI(req.body);
            console.log("Check result", result);
            return res.status(200).json({
                message: "Project updated successfully",
                data: result,
            });
        } catch (error) {
            return res.status(500).json({
                message: "Error updating project",
                error: error.message,
            });
        }
    },
    deleteProjectAPI: async (req, res) => {
        let result = await deleteProjectAPI(req.body.projectId);
        res.status(200).json({
            message: "Project deleted successfully",
            data: result,
        });
    },
    deleteUserByproject: async (req, res) => {
        if (req.body.type === "REMOVE-USER") {
            let result = await deleteUserByproject(req.body);
            res.status(200).json({
                message: "User deleted from project successfully",
                data: result,
            });
        } else {
            res.status(400).json({
                message: "User deleted from project FAILD",
                data: result,
            });
        }

    }


}