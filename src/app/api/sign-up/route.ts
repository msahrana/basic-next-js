import {connectDb} from "@/lib/connectDB";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import {SendEmail} from "@/helper/sendMail";

export const POST = async (request: NextRequest) => {
  try {
    // TODO
    await connectDb();
    const userInfo = await request.json();
    const {name, email, password} = userInfo;
    const user = await User.findOne({email});
    if (user) {
      return NextResponse.json({
        message: "User already exists",
        status: 400,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 6);
    const newUser = new User({name, email, password: hashedPassword});
    await newUser.save();

    /* for send mail */
    // const sendEmail = await SendEmail(email, "verify-email");
    // if (sendEmail === "Email sent successfully") {
    //   return NextResponse.json({
    //     message: "User created successfully",
    //     status: 200,
    //   });
    // }

    return NextResponse.json(userInfo);
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      customMessage: "error",
      status: 500,
    });
  }
};
