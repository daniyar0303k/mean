const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number, // Поле для возраста пользователя
    password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
