import { NextResponse } from "next/server";

export const POST = (req) => {
  const data = req.json();

  return NextResponse.json({ message: "This is post api of newsletter" });
};

export const GET = (req) => {
  return NextResponse.json({ message: "This is get api of newsletter" });
};
