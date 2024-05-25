import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { RegistrationModel } from "@/app/database/schema/register";
import sendEmail from "@/app/services/sendEmail";
import { createUser } from "@/app/services/createUser";
export async function POST(req) {
  try {
  const userData = await req.json();
    const promise = await Promise.all([
      createUser(userData),
      sendEmail(userData)
    ]);

    if(promise[0] || promise[1]){
      return NextResponse.json(promise[0].data);
    }
    
  } catch (err) {
    return NextResponse.error({
      code: 500,
      status: "err",
    });
  }
}
