import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // fetch users from a db
  return NextResponse.json([
    { id: 1, name: "Mohammad" },
    { id: 2, name: "Ronaldo" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate
  // If invalid, return 400
  // Else, return
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  return NextResponse.json(
    {
      id: 231,
      name: body.name,
    },
    { status: 201 }
  );
}
