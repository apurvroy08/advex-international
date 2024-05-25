import mongoose from "mongoose";
import { enquiryModel } from "@/app/database/schema/enquiries";

export const createEnquiry = async (data) => {
  try {
    // const data = await req.json();

    await mongoose.connect(process.env.MONGO_URL);

    if (!data.email || !data.message || !data.name) {
      return {
        success: false,
        error: {
          code: 400,
          message: "key missing",
        },
      };
    }

    const { name, email, message } = data;
    const model = new enquiryModel({
      name,
      email,
      message,
      //   createdOn: new Date().getTime(),
    });

    const result = await model.save();

    return {
      success: true,
      data: {
        message: "Enquiry created successfully",
        Enquiry: result,
      },
    };
  } catch (err) {
    return {
      success: false,
      error: {
        code: 500,
        message: "Error in creating Enquiry",
      },
    };
  }
};
