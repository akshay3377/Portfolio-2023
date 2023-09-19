import { sendEmailNotification } from "@/utils/mailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const { email, name, phone, message } = data;

  try {
    await sendEmailNotification({
      subject: "Frontend Developer",
      from: `Akshay <${process.env.NODEMAILER_USER}>`,
      to: email,
      text: `Thankyou ${name}. for reaching us, we will reach you soon.`,
      html: ``,
    });

    await sendEmailNotification({
      subject: "New User Registered in Portfolio website",
      from: email,
      to: process.env.NODEMAILER_USER,
      text: "",
      html: `<div><b>${message}</b></div><p>Sent from:</p><p>email : ${email}</p><p>phone no. ${phone}</p>`,
    });
  } catch (err) {
    console.log(err);
  }

  return NextResponse.json(data);
}
