import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";

// export function GET(request: NextRequest, {params}: { id: number }) {
export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  // Fetch data from a db
  // If not found, return 404
  // Else return data
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}



export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  // Validate the request body
  // If invalid, return 400
  // Fetch the user with the given id
  // If doesn't exist, return 404
  // Update the user
  // Return the updated user

  const body = await request.json();
  const validation = schema.safeParse(body);

  console.log(validation.error);
  console.log(validation.data);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  // Fetch user from db
  // if not found, return 404
  // delete the user
  // return 200

  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
}
