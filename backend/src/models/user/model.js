import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String },
    userAddress: { type: String },
    phoneNumber: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    consent: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;