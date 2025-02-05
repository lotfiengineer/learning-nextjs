import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  // fetch users from a db
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  // Validate
  // If invalid, return 400
  // Else, return
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const foundUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (foundUser)
    return NextResponse.json(
      {
        error: "User already exists babe!",
      },
      { status: 400 }
    );

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}
