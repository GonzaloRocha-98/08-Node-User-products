const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  lastName:   String,
  email: String,
  birthDate: Date,
},
{timestamps: true } // es una propiedad para que cuando se persista un dato en mongo ademas le agrega la fecha de creacion y modificacion 
);

module.exports = mongoose.model('users', userSchema);