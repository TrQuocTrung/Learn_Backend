const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    Phone: Number,
    email: String,
    image: String,
    description: String

}, {
    timestamps: true,
    // statics: {
    //     findByName(name) {
    //         return this.find({ name: new RegExp(name, 'i') });
    //     }
    // }
});
CustomerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;