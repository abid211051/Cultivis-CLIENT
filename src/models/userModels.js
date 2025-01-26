import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    fields: {
      type: [],
      required: false,
    },
    role: {
      type: String,
      enum: ["admin", "farmer", "expert"],
      default: "farmer",
    },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default Users;
