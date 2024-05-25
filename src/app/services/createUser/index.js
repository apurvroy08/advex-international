import mongoose from "mongoose";
import { RegistrationModel } from "@/app/database/schema/register";

export const createUser = async (data) => {
  try {
    // const data = await req.json();

    await mongoose.connect(process.env.MONGO_URL);

    if (!data.email || !data.mobile || !data.name) {
      return {
        success: false,
        error: {
          code: 400,
          message: "key missing",
        },
      };
    }

    const { name, email, mobile } = data;
    const model = new RegistrationModel({
      name,
      email,
      mobile,
      createdOn: new Date().getTime(),
    });

    const result = await model.save();

    return {
      success: true,
      data: {
        message: "User created successfully",
        user: result,
      },
    };
  } catch (err) {
    return {
      success: false,
      error: {
        code: 500,
        message: "Error in creating user",
      },
    };
  }
};
