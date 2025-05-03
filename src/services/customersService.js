const Customer = require('../models/Customers')
const aqp = require('api-query-params');

module.exports = {
    postCreateCustomer: async (CustomerData) => {
        try {
            let result = await Customer.create({
                name: CustomerData.name,
                address: CustomerData.address,
                Phone: CustomerData.Phone,
                email: CustomerData.email,
                image: CustomerData.image,
                description: CustomerData.description
            });
            return result;
        } catch (error) {
            console.log("Error creating customer: ", error);
        }
    },
    postCreateArrCustomers: async (CustomerDataArr) => {
        try {
            let result = await Customer.insertMany(CustomerDataArr);
            return result;
        } catch (error) {
            console.log("Error creating customers: ", error);
            return null;
        }
    },
    getallUser: async (limit, page, name, queryString) => {
        try {
            let result = null;
            // if (limit && page) {
            //     let offset = (page - 1) * limit;
            const { filter, skip } = aqp(queryString);
            //     delete filter.page;
            //     console.log("filter: ", filter);
            //     if (name) {
            //         result = await Customer.find(
            //             {
            //                 "name": { $regex: '.*' + name + '.*' }
            //             }).skip(skip).limit(limit).exec();

            //     } else {
            result = await Customer.find({ filter }).skip(offset).limit(limit).exec();
            //     }
            // } else {
            //     result = await Customer.find({});
            // }
            return result;
        } catch (error) {
            console.log("Error getting customers: ", error);
        }

    },
    updateCustomer: async (id, name, email, address) => {
        try {
            let result = await Customer.updateOne({ _id: id }, { name: name, email: email, address: address });
            return result;
        } catch (error) {
            console.log("Error updating customer: ", error);
        }
    },
    deleteCustomer: async (id) => {
        try {
            let result = await Customer.deleteById({ _id: id });
            return result;
        } catch (error) {
            console.log("Error deleting customer: ", error);
        }
    },
    deleteArrayCustomers: (Arr_id) => {

    }

};