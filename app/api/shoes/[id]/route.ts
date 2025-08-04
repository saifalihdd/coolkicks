import { NextResponse } from "next/server";
import { shoes } from "../route"; 

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const shoe = shoes.find((s) => s.id.toString() === params.id);

  if (!shoe) {
    return NextResponse.json({ error: "Shoe not found" }, { status: 404 });
  }

  return NextResponse.json(shoe);
}