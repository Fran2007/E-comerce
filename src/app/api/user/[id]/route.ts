import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "getting single users",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Deleting single users",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "updating single users",
  });
}
