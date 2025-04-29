const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
});
const User = mongoose.model('User', userSchema);
// const cat = new Kitten({ name: 'TranQuocTrung' });
// cat.save();
module.exports = User;