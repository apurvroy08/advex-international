import mongoose from "mongoose";
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  createdOn: Number,
});
export const RegistrationModel = new mongoose.model(
  "registration",
  registrationSchema
);
