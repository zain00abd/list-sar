import AdduserModal from "../../../DB/models/usermodel";
import { connectMongoDB } from "../../../DB/mongodb";
import { NextResponse } from "next/server";




export async function POST(request) {
  // 1- Receive data from Front-end
  const objFromFrontEnd = await request.json();
  console.log(objFromFrontEnd);

  // 2- connect to DB
  await connectMongoDB();

  // 3- Hashing password with bcrypt.js
  console.log("*****************    salt   **************************");


  // 4- Try to Store obj to DB
  await AdduserModal.create({
    name: objFromFrontEnd.name,
    addres: objFromFrontEnd.addres,
    select: objFromFrontEnd.select,

  });

  // 5- Go back to frontend
  return NextResponse.json("zainaddyes");
}



