// import the mongoose package
const mongoose = require('mongoose');

// create a Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        }
    }
);

// export the model
module.exports = mongoose.model("login", UserSchema, 'User');
