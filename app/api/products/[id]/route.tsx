import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: number };
  }
) {
  if (params.id > 10)
    return NextResponse.json(
      {
        error: "Product not found",
      },
      { status: 400 }
    );

  return NextResponse.json({ id: 1, name: "Cheese", price: 5.99 });
}

export async function PUT(
  request: NextRequest,
  {
    params: { id },
  }: {
    params: { id: number };
  }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ id: id, name: body.name, price: body.price });
}

export function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({});
}
