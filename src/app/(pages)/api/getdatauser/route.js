import AdduserModal from "../../../DB/models/usermodel";
import { connectMongoDB } from "../../../DB/mongodb";
import { NextResponse } from "next/server";





export async function GET(request) {
  await connectMongoDB();
  const arrData = await AdduserModal.find();

    // 5- Go back to frontend
    return NextResponse.json(arrData);
}
