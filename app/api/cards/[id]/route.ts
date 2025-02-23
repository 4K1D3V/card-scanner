import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const card = await prisma.card.findUnique({
      where: { id: params.id },
      include: { messages: true },
    })

    if (!card) {
      return NextResponse.json({ error: "Card not found" }, { status: 404 })
    }

    return NextResponse.json(card)
  } catch (error) {
    console.error("Error fetching card:", error)
    return NextResponse.json({ error: "Error fetching card" }, { status: 500 })
  }
}

