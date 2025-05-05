const { get } = require('mongoose');
const aqp = require('api-query-params');
const Project = require('../models/project');
module.exports = {
    createnewProjectAPI: async (projectData) => {
        try {
            if (projectData.type === "EMPTY-PROJECT") {
                let result = await Project.create(projectData);
                return result;
            }
            else if (projectData.type === "ADD-USER") {
                let myProject = await Project.findById(projectData.projectId).exec();
                for (let i = 0; i < projectData.userArr.length; i++) {
                    myProject.userInfor.push(projectData.userArr[i]);

                }
                let result = await myProject.save();
                console.log("Check my project", myProject);
                return result;
            } else
                return null;
        } catch (error) {
            console.log("Error creating project: ", error);
        }
    },
    getProjectAPI: async (queryString) => {
        const page = queryString.page;
        const { filter, limit, population } = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        console.log("Check filter", queryString);
        let result = await Project.find(filter).populate(population).skip(offset).limit(limit).exec();
        return result;
    },
    updateProjectAPI: async (projectdata) => {
        if (projectdata.type === "UPDATE-PROJECT") {
            const { name, startDate, endDate, description, customerInfor, userInfor, leader, task } = projectdata;
            const projectUpdate = await Project.updateOne({ _id: projectdata.id }, { name, startDate, endDate, description, customerInfor, userInfor, leader, task });
            return projectUpdate;
        }
    },
    deleteProjectAPI: async (projectId) => {
        try {
            let result = await Project.deleteOne({ _id: projectId });
            return result;
        } catch (error) {
            console.log("Error deleting project: ", error);
        }
    },
    deleteUserByproject: async (data) => {//projectId, userArr
        try {

            // let result = await Project.findOneAndUpdate({ _id: projectId }, { $pull: { userInfor: { $in: userArr } } }, { new: true },);
            // return result;
            let myProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.userArr.length; i++) {
                myProject.userInfor.pull(data.userArr[i]);
            }
            let newResult = await myProject.save();
            return newResult;
        } catch (error) {
            console.log("Error deleting user from project: ", error);
        }
    }
}