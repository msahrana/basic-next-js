import {NextRequest, NextResponse} from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    // TODO
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
};
