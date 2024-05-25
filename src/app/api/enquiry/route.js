import { NextResponse } from "next/server";
import { createEnquiry } from "@/app/services/createEnquiry";
export async function POST(req) {
  try {
       const enquiryData = await req.json();
       const data = await createEnquiry(enquiryData)

    if(data){
      return NextResponse.json(data);
    }
    
  } catch (err) {
    return NextResponse.error({
      code: 500,
      status: "err",
    });
  }
}
