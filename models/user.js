const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"]
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please provide valid email"
    ]
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
  }

})


UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
  next();
})



const User = mongoose.model("User", UserSchema);

module.exports = User;
