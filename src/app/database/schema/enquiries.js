import mongoose from "mongoose";
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdOn: { type: Date, default: Date.now },
});
export const enquiryModel = new mongoose.model("enquiries", enquirySchema);
