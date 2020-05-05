import * as mongoose from "mongoose";


let UserSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: "Name is required",
  },
  email: {
    type: String,
    required: "Email is required",
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique: true,
  },
  birthday: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

UserSchema.pre("save", function preSave(next) {
  this.id = this._id;
  next();
});

export default mongoose.model("User", UserSchema);
