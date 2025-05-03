const { name } = require("ejs");
const { postCreateCustomer, postCreateArrCustomers, getallUser, updateCustomer, deleteCustomer } = require("../services/customersService");
const { uploadSingleFile } = require("../services/fileService");
const aqp = require('api-query-params');
module.exports = {
    postCreateCustomer: async (req, res) => {
        //     name: { type: String, required: true },
        //     address: String,
        //         Phone: Number,
        //             email: String,
        //                 image: String,
        //                     description: String
        // 
        let { name, address, Phone, email, description } = req.body;
        let imageurl = "";

        if (!req.files || Object.keys(req.files).length === 0) {

        } else {
            let result = await uploadSingleFile(req.files.image);
            imageurl = result.path;

        }
        let CustomerData = {
            name: name,
            address: address,
            Phone: Phone,
            email: email,
            description: description,
            image: imageurl
        };
        let user = await postCreateCustomer(CustomerData);
        return res.status(200).json({
            status: 200,
            message: "Create customer successfully",
            data: user
        });
    },
    postCreateArrrayCustomer: async (req, res) => {
        let customers = await postCreateArrCustomers(req.body.customers);
        console.log(" check customer : ", customers);
        return res.status(200).json({
            status: 200,
            message: "Create customers successfully",
            data: customers
        });
    },
    getallCustomerAPI: async (req, res) => {
        const limit = req.query.limit;
        const page = req.query.page;
        const name = req.query.name;
        let result = null;

        try {
            result = await getallUser(limit, page, name, req.query);
            return res.status(200).json({
                status: 200,
                message: "Get customers successfully",
                data: result
            });
        } catch (error) {
            console.log("Error in getallCustomerAPI:", error);
            return res.status(500).json({
                status: 500,
                message: "Error getting customers",
            });
        }

    },
    updateCustomerAPI: async (req, res) => {
        let { id, name, email, address } = req.body;
        let result = await updateCustomer(id, name, email, address);
        return res.status(200).json({
            status: 200,
            message: "Update customer successfully",
            data: result
        });
    },
    deleteCustomerAPI: async (req, res) => {
        let id = req.body.id;
        let result = await deleteCustomer(id);
        return res.status(200).json({
            status: 200,
            message: "Delete customer successfully",
            data: result
        });
    },
    deleteArrayCustomerAPI: (req, res) => {

    }
};