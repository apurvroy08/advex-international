import { NextResponse } from "next/server.js";
// import contentful from "contentful";
// const NextResponse = require("next/server");
const contentful = require("contentful");

export const dynamic = 'force-dynamic'
export async function GET(req){

    try {
        const entries = contentful.createClient({
          space: process.env.SPACE,
          accessToken: process.env.ACCESS_TOKEN
        });
        
        const data = await entries.getEntries({
          content_type: "packageCategories",
        });
    
       
    
       return NextResponse.json({ data: data });
      } catch (err) {
       
        return NextResponse.error({
          code: 500,
          status: "err",
        });
        // NextResponse.status(500).send({ msg: "Internal server error" });
      }
}